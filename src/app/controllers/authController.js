const User = require("../model/User");
const handleErrorAuth = require("../../util/handleErrorAuth");
class UsersController {
  signUp_get(req, res, next) {
    res.render("auth/sign-up");
  }
  async signUp_post(req, res, next) {
    try {
      const { nickName, email, password } = req.body;
      const user = await User.create({ nickName, email, password });
      // res.status(201).json(user);
    } catch (err) {
      res.status(400).json(handleErrorAuth(err));
    }
  }
  login_get(req, res, next) {
    res.render("auth/login");
  }
  login_post(req, res, next) {
    res.json(req.body);
  }
}
module.exports = new UsersController();
