const express = require("express");
// c = cart
const c_controller = require("../controller/c_cart");
const c_router = express.Router();

c_router
  .route("/cart")
  .post(c_controller.addToCart)
  .get(c_controller.cartItems);
// by name, id, brand

c_router
  .route("/cart/:id")
  .delete(c_controller.deleteToCart)
  .get(c_controller.allcart);
//   .patch(memberController.updateMemberByID);
module.exports = c_router;
