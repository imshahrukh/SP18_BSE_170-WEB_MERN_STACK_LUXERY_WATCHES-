const _CART = require("../model/Cart");

exports.addToCart = async function (req, res) {
  let cart;
  try {
    console.log(req.body);
    if ((await _CART.find({ visitor_id: req.body.visitor_id })).length === 0) {
      cart = await _CART.create(req.body);
    } else {
      cart = await _CART.findOneAndUpdate(
        { visitor_id: req.body.visitor_id },
        {
          $push: {
            item: req.body.item,
          },
        },
        { new: true }
      );
    }
    res.status(201).json({
      status: "success",
      size: cart.item.length,
      data: {
        cart: cart,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

exports.deleteToCart = async function (req, res) {
  try {
    var query = require("url").parse(req.url, true).query;
    const { product_id } = query;
    console.log("TEST  ", product_id);
    console.log("TEST  ");
    const cart = await _CART.findOneAndUpdate(
      { visitor_id: req.params.id },
      {
        $pull: { item: { product_id: product_id } },
      },
      { new: true }
    );

    res.status(201).json({
      status: "success",
      data: {
        cart: cart,
      },
    });
    //   SHAHRUKH
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};
exports.cartItems = async function (req, res) {
  try {
    const cart = await _CART.find({});

    res.status(201).json({
      status: "success",
      data: {
        cart: cart,
      },
    });
    //   SHAHRUKH
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};
exports.allcart = async function (req, res) {
  try {
    console.log(req.params.id);
    const cart = await _CART.find({ visitor_id: "1" });
    // console.log(cart[0].item.length);
    res.status(201).json({
      status: "success",
      size: cart[0].item.length,
      data: {
        cart: cart,
      },
    });
    //   SHAHRUKH
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};
