const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db/db');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(cors());

require('dotenv').config();
connectDB();

app.use(bodyParser.json());

app.use('/user', require('./routes/user'));
app.use('/product', require('./routes/product'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
