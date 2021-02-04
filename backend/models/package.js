const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    location: {
      type: String,
    },
    trackingId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Project = mongoose.model("project", ProjectSchema);
