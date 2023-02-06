const express = require("express");
const newRouter = express.Router();
const newsController = require("../app/controllers/newsController");
newRouter.use("/:slug", newsController.show);
newRouter.use("/", newsController.index);

module.exports = newRouter;
