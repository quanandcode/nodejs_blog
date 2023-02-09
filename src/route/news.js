const express = require("express");
const newRouter = express.Router();
const newsController = require("../app/controllers/newsController");
newRouter.get("/:slug", newsController.show);
newRouter.get("/", newsController.index);

module.exports = newRouter;
