module.exports = function handleErrorAuth(err) {
  const errors = {
    nickName: "",
    email: "",
    password: "",
  };
  if (err.message == "Email is not correct") {
    errors.email = "Email chưa được đăng kí!";
  }
  if (err.message == "Password is not correct") {
    errors.password = "Mật khẩu không đúng";
  }
  if (err.code === 11000) {
    errors.email = "Email đã tồn tại";
    return errors;
  }
  // get a object properties in errors in err
  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(
      ({ properties }) => (errors[properties.path] = properties.message)
    );
  }
  return errors;
};
