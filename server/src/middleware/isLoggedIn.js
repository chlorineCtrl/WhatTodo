const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHader = req.headers.authorization;
  if (!authHader) {
    res.status(401).send("invalid credentials");
  } else {
    const token = authHader.split(" ")[1];
    console.log(token);
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        res.status(403).send("Invalid credentils");
      } else {
        next();
      }
    });
  }
};
