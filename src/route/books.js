const express = require("express");
const bookRouter = express.Router();
const BookController = require("../app/controllers/BooksController");
bookRouter.get("/create", BookController.create);
bookRouter.post("/store", BookController.store);
bookRouter.get("/:id/edit", BookController.edit);
bookRouter.put("/:id", BookController.update);
bookRouter.get("/:slug", BookController.show);
module.exports = bookRouter;
