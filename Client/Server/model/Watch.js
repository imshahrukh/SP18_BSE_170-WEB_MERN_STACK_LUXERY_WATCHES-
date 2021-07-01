const mongoose = require("mongoose");

const Watch = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  totalItems: {
    type: Number,
    required: true,
  },
  totalSale: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  weight: {
    required: true,
    type: Number,
  },

  discription: {
    type: String,
    required: true,
  },
  review: {
    type: String,
  },
  tags: [{ type: String }],
  model: {
    type: String,
    required: true,
  },
  // start
  case_material: {
    type: String,
    required: true,
  },
  case_size: {
    type: String,
    required: true,
  },
  case_thickness: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
});

module.exports = mongoose.model("Watch", Watch);
