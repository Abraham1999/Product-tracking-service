const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    googleId: String,
    email: {
      type: String,
      required: true,
      unique: true,
      max: 100,
    },
    name: {
      type: String,
      required: true,
      max: 100,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      enum: ["TALENT", "FAN"],
    },
    avatar: {
      type: String
    },
    stars: {
      type: Array,
      default: []
    },
    resetPasswordToken: {
      type: String,
      default: "",
    },
    resetPasswordExpires: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", UserSchema);
