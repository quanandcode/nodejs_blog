const { multiMongooseToObject } = require("../../util/mongoose");
const Book = require("../model/Book");
class meController {
  //GET: show edit page
  show(req, res, next) {
    Book.find({})
      .then((books) =>
        res.render("me/stored-books", { books: multiMongooseToObject(books) })
      )
      .catch(next);
  }
}
module.exports = new meController();
