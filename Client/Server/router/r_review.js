const express = require("express");
// r = review
const r_controller = require("../controller/c_review");
const r_router = express.Router();

// by name, id, brand
r_router
  .route("/review/:id")
  .post(r_controller.addReview)
  .get(r_controller.getReview);
//   .patch(memberController.updateMemberByID);
module.exports = r_router;
