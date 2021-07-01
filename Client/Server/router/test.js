const express = require("express");
const w_router = express.Router();

w_router
  .route("/tutorials")
  .post(await _TUTORIALS.create(req.body))
  .get(await _TUTORIALS.find())

  .delete(
    await _TUTORIALS.findOneAndUpdate(
      { _id: req.params.id },
      {
        $pull: { tutorial: { product_id: req.body.product_id } },
      },
      { new: true }
    )
  );
w_router
  .route("/tutorials/:id")
  .get(
     var query = require("url").parse(req.url, true).query;
    const { title } = query;  
    await _TUTORIALS.find({ title: title }));
