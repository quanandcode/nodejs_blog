const User = require("../model/User");
const handleErrorAuth = require("../../util/handleErrorAuth");
const createToken = require("../../util/createToken");

class UsersController {
  signUp_get(req, res, next) {
    res.render("auth/sign-up", { layout: "login-signup" });
  }
  async signUp_post(req, res, next) {
    try {
      // initialize in expiresIn of token
      const maxAge = 3 * 24 * 60 * 60;
      const { nickName, email, password } = req.body;
      const user = await User.create({ nickName, email, password });
      const token = createToken(user._id, maxAge);
      res.cookie("jwt", token, { maxAge: maxAge * 1000, httpOnly: true });
      res.status(201).json({ user });
    } catch (err) {
      // console.log(err);
      const errors = handleErrorAuth(err);
      res.status(400).json({ errors });
    }
  }
  login_get(req, res, next) {
    res.render("auth/login", { layout: "login-signup" });
  }
  async login_post(req, res, next) {
    const { email, password } = req.body;
    try {
      const maxAge = 3 * 24 * 60 * 60;
      const user = await User.login(email, password);
      const token = createToken(user._id, maxAge);
      res.cookie("jwt", token, { maxAge: maxAge * 1000, httpOnly: true });
      res.status(200).json({ user: user._id });
    } catch (err) {
      const errors = handleErrorAuth(err);
      res.status(400).json({ errors });
    }
  }
  logout_get(req, res) {
    res.cookie("jwt", "", { maxAge: 1 });
    res.redirect("/");
  }
}
module.exports = new UsersController();
