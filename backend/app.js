const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require('./db/db');
const app = express();
const path = require("path");
const cors = require('cors')

require("dotenv").config();
connectDB();

app.use(cors())
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/user", require("./routes/user"));
app.use("/projects", require("./routes/project"));

if (process.env.NODE_ENV === 'production') {

  app.use(express.static('frontend/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'));
  });

//  app.get('*', (req, res) =>{
//     res.sendFile(path.join(__dirname+'../client/build/index.html'));
// });


}


const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
