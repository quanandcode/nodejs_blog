const { mongooseToObject } = require("../../util/mongoose");
const Book = require("../model/Book");
class BooksController {
  show(req, res, next) {
    Book.findOne({ slug: req.params.slug })
      .then((book) => {
        res.render("books/show", {
          book: mongooseToObject(book),
        });
      })
      .catch(next);
  }
  create(req, res, next) {
    Book.findOne({})
      .then((book) => {
        res.render("books/create");
      })
      .catch(next);
  }
  store(req, res, next) {
    const data = req.body;
    data.image = `https://i.ytimg.com/vi/${data.videoId}/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAbSa8pyZY_Mny9C2Kpi61vrZS6Yg`;
    const book = new Book(data);
    book
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }
  edit(req, res, next) {
    Book.findById(req.params.id)
      .then((book) =>
        res.render("books/edit", { book: mongooseToObject(book) })
      )
      .catch(next);
  }
  update(req, res, next) {
    const takeSlug = new Book(req.body);
    console.log(takeSlug.model.slug);
    Book.updateOne(
      { _id: req.params.id },
      {
        ...req.body,
        image: `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAbSa8pyZY_Mny9C2Kpi61vrZS6Yg`,
      }
    ).then(() => {
      res.redirect("/me/stored");
    });
  }
  delete(req, res, next) {
    Book.delete({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }
  forceDelete(req, res, next) {
    Book.deleteOne({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }
  restore(req, res, next) {
    Book.restore({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }
  handleFormAction(req, res, next) {
    switch (req.body.action) {
      case "delete":
        Book.delete({ _id: { $in: req.body.bookIds } })
          .then(() => {
            res.redirect("back");
          })
          .catch(next);
        break;
      case "restore":
        Book.restore({ _id: { $in: req.body.bookIds } })
          .then(() => {
            res.redirect("back");
          })
          .catch(next);
        break;
      case "deleteForce":
        Book.deleteMany({ _id: { $in: req.body.bookIds } })
          .then(() => {
            res.redirect("back");
          })
          .catch(next);
        break;
      default:
    }
  }
}

module.exports = new BooksController();
