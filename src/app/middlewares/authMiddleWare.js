const jwt = require("jsonwebtoken");
const requireAuth = function (req, res, next) {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "secret of EpicRead", (err, decodedToken) => {
      if (err) {
        res.redirect("/auth/login");
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect("/auth/login");
  }
};
module.exports = { requireAuth };
