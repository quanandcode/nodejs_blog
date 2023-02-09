const express = require("express");
const siteRouter = express.Router();
const siteControllers = require("../app/controllers/siteControllers");
siteRouter.get("/search", siteControllers.search);
siteRouter.get("/", siteControllers.index);

module.exports = siteRouter;
