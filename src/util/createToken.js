const jwt = require("jsonwebtoken");
module.exports = function createToken(id, maxAge) {
  return jwt.sign({ id }, "secret of EpicRead", { expiresIn: maxAge });
};
