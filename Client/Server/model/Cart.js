const mongoose = require("mongoose");

const Cart = new mongoose.Schema({
  visitor_id: {
    type: String,
  },
  item: [
    {
      product_id: {
        type: String,
        unique: true,
      },
    },
  ],
});

module.exports = mongoose.model("Cart", Cart);
