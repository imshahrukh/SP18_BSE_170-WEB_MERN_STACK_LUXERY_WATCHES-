const mongoose = require("mongoose");

const Review = new mongoose.Schema({
  product_id: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
  },
  reviewer: [
    {
      member_id: {
        type: String,
      },
      message: {
        type: String,
      },
      rating: {
        type: Number,
      },
    },
  ],
});

module.exports = mongoose.model("Review", Review);
