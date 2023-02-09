const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Course = new Schema({
  name: { type: String, minLength: 5, maxLength: 255 },
  author: { type: String, maxLength: 600 },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Course", Course);
