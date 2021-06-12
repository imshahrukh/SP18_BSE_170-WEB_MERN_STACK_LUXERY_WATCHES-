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
      total_item: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("Cart", Cart);
