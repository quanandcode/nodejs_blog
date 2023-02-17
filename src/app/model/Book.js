const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
const Schema = mongoose.Schema;
mongoose.plugin(slug);
const Book = new Schema(
  {
    name: { type: String, require: true },
    author: { type: String, maxLength: 600 },
    image: { type: String },
    slug: { type: String, slug: "name", unique: true },
    price: { type: String },
    videoId: { type: String },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Book", Book);
