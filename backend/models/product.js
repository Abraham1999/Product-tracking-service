const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
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
    arrivalDate: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Product = mongoose.model("product", ProductSchema);
