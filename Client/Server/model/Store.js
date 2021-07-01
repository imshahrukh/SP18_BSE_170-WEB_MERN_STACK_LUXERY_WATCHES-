const mongoose = require("mongoose");

const Store = new mongoose.Schema({
  member_id: {
    type: String,
    required: true,
  },
  store_name: {
    type: String,
    unique: true,
  },
  store_products: [{ product_id: String }],
  rating: {
    type: Number,
  },
});

module.exports = mongoose.model("Store", Store);
