const express = require("express");
// s = store
const s_controller = require("../controller/c_store");
const s_router = express.Router();

s_router
  .route("/store")
  .post(s_controller.addStore)
  .get(s_controller.getStoreItems);
// by name, id, brand

s_router
  .route("/store/:id")
  .post(s_controller.addItemToStore)
  .get(s_controller.getItemToStore)
  .delete(s_controller.deleteItemToStore);
module.exports = s_router;
