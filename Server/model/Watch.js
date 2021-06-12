const mongoose = require("mongoose");

const Watch = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  weight: {
    required: true,
    type: String,
  },
  review: {
    type: String,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
  data_of_manufacturing: {
    type: Date,
    required: true,
  },
  tags: [{ type: String }],
  colors: [{ type: String }],
  Model: {
    type: String,
    required: true,
  },
  case_size: {
    type: String,
    required: true,
  },
  case_material: {
    type: String,
    required: true,
  },
  case_size: {
    type: String,
    required: true,
  },
  case_shape: {
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
