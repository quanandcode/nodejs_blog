const { multiMongooseToObject } = require("../../util/mongoose");
const Book = require("../model/Book");
class meController {
  //GET: show edit page
  storeBooks(req, res, next) {
    let listSortedBooks = Book.find({});
    if (req.query.hasOwnProperty("_sort")) {
      listSortedBooks = listSortedBooks.sort({
        [req.query.column]: req.query.type,
      });
    }
    Promise.all([listSortedBooks, Book.countDocumentsDeleted()])
      .then(([books, countDeleted]) => {
        res.render("me/stored-books", {
          books: multiMongooseToObject(books),
          countDeleted,
        });
      })
      .catch(next);
  }
  showTrash(req, res, next) {
    Book.findDeleted()
      .then((books) =>
        res.render("me/trash-books", { books: multiMongooseToObject(books) })
      )
      .catch(next);
  }
}
module.exports = new meController();
