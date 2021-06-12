const _WATCH = require("../model/Watch");

exports.addMember = async function (req, res) {
  try {
    const addMember = await _WATCH.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        member: addMember,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};
