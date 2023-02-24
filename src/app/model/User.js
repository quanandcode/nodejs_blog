const mongoose = require("mongoose");
const { isEmail } = require("validator");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const User = new Schema({
  nickName: {
    type: String,
    required: [true, "Vui lòng nhập Tên tài khoản"],
    minlength: [5, "Tên tài khoản phải dài tối thiểu 5 kí tự"],
  },
  email: {
    type: String,
    required: [true, "Vui lòng nhập email"],
    validate: [isEmail, "Email không hợp lệ"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Vui lòng nhập mật khẩu"],
    minlength: [6, "Mật khẩu phải trên 6 kí tự"],
  },
});
User.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(this.password, salt);
  this.password = hash;
  next();
});
module.exports = mongoose.model("User", User);
