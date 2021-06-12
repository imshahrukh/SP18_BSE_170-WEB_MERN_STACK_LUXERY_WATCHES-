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
  store_products: [{ type: String }],
  rating: {
    type: Number,
  },
});

module.exports = mongoose.model("Store", Store);
