module.exports = function handleErrorAuth(err) {
  const errors = {
    nickName: "",
    email: "",
    password: "",
  };
  if (err.code === 11000) {
    errors.email = "Email đã tồn tại";
    return errors;
  }
  // get a object properties in errors in err
  Object.values(err.errors).forEach(
    ({ properties }) => (errors[properties.path] = properties.message)
  );
  return errors;
};
