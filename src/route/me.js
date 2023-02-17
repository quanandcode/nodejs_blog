const express = require("express");
const meRouter = express.Router();
const meController = require("../app/controllers/meController");
meRouter.get("/stored", meController.show);

module.exports = meRouter;
