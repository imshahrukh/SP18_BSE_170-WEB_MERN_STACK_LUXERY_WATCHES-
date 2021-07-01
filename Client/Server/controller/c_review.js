const _REVIEW = require("../model/Review");

exports.addReview = async function (req, res) {
  let review;
  try {
    if ((await _REVIEW.find({ product_id: req.params.id })).length === 0) {
      review = await _REVIEW.create(req.body);
    } else {
      review = await _REVIEW.updateOne(
        { product_id: req.params.id },
        {
          $push: {
            reviewer: req.body,
          },
        },
        { new: true }
      );
    }

    res.status(201).json({
      status: "success",
      data: {
        review: review,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

exports.getReview = async function (req, res) {
  let initialValue = 0;
  try {
    //   SHAHRUKH
    var review = await _REVIEW.find({ product_id: req.params.id });
    const all_reviews = review[0].reviewer;
    res.status(201).json({
      status: "success",
      data: {
        rating:
          all_reviews.reduce(function (total, currentValue) {
            return total + currentValue.rating;
          }, initialValue) / all_reviews.length,
        review: all_reviews,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};
