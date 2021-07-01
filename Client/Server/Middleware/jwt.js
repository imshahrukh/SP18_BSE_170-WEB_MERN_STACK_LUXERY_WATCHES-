const jwt = require("jsonwebtoken");

export const verifyJWT = (req, res, next) => {
  const token = req.headers["x=access-token"];
  if (!token) {
    res.send("pls try next time");
  } else {
    jwt.verify(token, "shahrukh", (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "U are faild to authorized" });
      } else {
        req.userId = decoded.userId;
        next();
      }
    });
  }
};
