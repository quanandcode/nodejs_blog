const { multiMongooseToObject } = require("../../util/mongoose");
const Book = require("../model/Book");
class siteController {
  index(req, res, next) {
    Book.find({})
      .then((books) =>
        res.render("home", {
          books: multiMongooseToObject(books),
        })
      )
      .catch(next);
    // res.render("home");
  }
  search(req, res) {
    res.render("search");
  }
}
module.exports = new siteController();
