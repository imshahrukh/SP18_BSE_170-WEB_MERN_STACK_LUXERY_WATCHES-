const _WATCH = require("../model/Watch");

exports.addWatch = async function (req, res) {
  try {
    console.log(req.body);

    const watch = await _WATCH.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        watch: watch,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

exports.watchById = async function (req, res) {
  try {
    console.log(req.params.id);
    const watch = await _WATCH.findById(req.params.id);

    res.status(201).json({
      status: "success",
      data: {
        watch: watch,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};
exports.getAllWatches = async function (req, res) {
  try {
    const watch = await _WATCH.find();

    res.status(201).json({
      status: "success",
      data: {
        watch: watch,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

exports.getWatch = async function (req, res) {
  try {
    var query = require("url").parse(req.url, true).query;
    const { id, name, brand } = query;
    console.log(query);

    let watch = await _WATCH.find(
      {
        $or: [
          { tags: { $in: name } },
          { _id: id },
          { name: name },
          { brand: brand },
        ],
      }
      // { status: "active" }
    );
    watch = watch.filter((el) => el.status === "active");
    // console.log("watch :: ", watch);
    res.status(201).json({
      status: "success",
      data: {
        watch: watch,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

exports.updateWatch = async function (req, res) {
  try {
    const watch = await _WATCH.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(201).json({
      status: "success",
      data: {
        watch: watch,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
exports.deleteWatch = async function (req, res) {
  // console.log(req.params.id);
  try {
    const watch = await _WATCH.findByIdAndRemove(req.params.id, {
      new: true,
    });

    res.status(201).json({
      status: "success",
      data: {
        watch: watch,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
