const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Quan_education_dev");
    console.log("Connect to db successfully.");
  } catch (error) {
    console.log("Connect to db failure!!");
  }
}
module.exports = { connect };
