const _STORE = require("../model/Store");
// addStore;
// getStoreItems;
// addItemToStore;
// deleteItemToStore;
exports.addStore = async function (req, res) {
  try {
    const store = await _STORE.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        store: store,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

exports.getStoreItems = async function (req, res) {
  try {
    var query = require("url").parse(req.url, true).query;
    const { name } = query;
    const store = await _STORE.find({ store_name: name });
    console.log(name);
    const st = Object.keys(store).length;
    res.status(201).json({
      status: "success",
      store: st,
      data: {
        store: store,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};
exports.getItemToStore = async function (req, res) {
  try {
    const store = await _STORE.find({ member_id: req.params.id });
    const st = Object.keys(store).length;
    res.status(201).json({
      status: "success",
      store: st,
      data: {
        store: store,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

exports.addItemToStore = async function (req, res) {
  let store;

  console.log(req.body);
  try {
    store = await _STORE.updateOne(
      { member_id: req.params.id },
      {
        $push: {
          store_products: req.body,
        },
      },
      { new: true }
    );

    res.status(201).json({
      status: "success",
      data: {
        store: store,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

exports.deleteItemToStore = async function (req, res) {
  let store;
  try {
    store = await _STORE.updateOne(
      { _id: req.params.id },
      {
        $pull: {
          store_products: { product_id: req.body.store_id },
        },
      },
      { new: true }
    );

    res.status(201).json({
      status: "success",
      data: {
        store: store,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};
