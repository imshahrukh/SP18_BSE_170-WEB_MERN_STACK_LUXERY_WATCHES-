const _MEMBER = require("../model/Member");
const jwt = require("jsonwebtoken");

// get All memebers
exports.findMemeber = async function (req, res) {
  try {
    // var query = require("url").parse(req.url, true).query;
    // const { id } = query;
    var members = await _MEMBER.find(req.body);

    const tot_mem = Object.keys(members).length;
    const id = members._id;

    const token = jwt.sign({ id }, "shahrukh", {
      expiresIn: 3600,
    });
    res.status(201).json({
      status: "success",
      login: true,
      token: token,
      total: tot_mem,
      data: {
        member: members,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      total: 0,
      login: false,
      message: "Data fail to add in the Database........",
    });
  }
};
