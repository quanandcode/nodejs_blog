const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
const mongooseDelete = require("mongoose-delete");
const Schema = mongoose.Schema;

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
//Add plugin
Book.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });
mongoose.plugin(slug);

module.exports = mongoose.model("Book", Book);
