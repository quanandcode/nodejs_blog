const express = require("express");
const siteRouter = express.Router();
const siteControllers = require("../app/controllers/siteControllers");
siteRouter.use("/search", siteControllers.search);
siteRouter.use("/", siteControllers.index);

module.exports = siteRouter;
