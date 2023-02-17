const express = require("express");
const meRouter = express.Router();
const meController = require("../app/controllers/meController");
meRouter.get("/stored/books", meController.show);
meRouter.get("/trash/books", meController.showTrash);
module.exports = meRouter;
