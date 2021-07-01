const express = require("express");
// w =watch
const w_controller = require("../controller/c_watch");
const w_router = express.Router();

w_router
  .route("/watch")
  .post(w_controller.addWatch)
  .get(w_controller.getAllWatches);
// by name, id, brand
w_router
  .route("/watch/:id")
  .get(w_controller.getWatch)
  .patch(w_controller.updateWatch)
  .delete(w_controller.deleteWatch);

w_router.route("/watch/search").get(w_controller.getWatch);
w_router.route("/watch/single/:id").get(w_controller.watchById);
// .patch(w_controller.updateWatch);
//   .patch(memberController.updateMemberByID);
module.exports = w_router;
