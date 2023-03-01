const jwt = require("jsonwebtoken");
const User = require("../model/User");
const requireAuth = function (req, res, next) {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "secret of EpicRead", (err, decodedToken) => {
      if (err) {
        res.redirect("/auth/login");
      } else {
        next();
      }
    });
  } else {
    res.redirect("/auth/login");
  }
};
const checkUser = function (req, res, next) {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "secret of EpicRead", async function (err, decodedToken) {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        console.log(res.locals.user);
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};
module.exports = { requireAuth, checkUser };
