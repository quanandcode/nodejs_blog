const express = require("express");
const authRouter = express.Router();
const authController = require("../app/controllers/authController");
authRouter.get("/signup", authController.signUp_get);
authRouter.post("/signup", authController.signUp_post);
authRouter.get("/login", authController.login_get);
authRouter.post("/login", authController.login_post);

module.exports = authRouter;
