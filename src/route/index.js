const bookRouter = require("./books");
const meRouter = require("./me");
const newRouter = require("./news");
const siteRouter = require("./site");
const authRouter = require("./auth");
//require middleware
const { requireAuth } = require("../app/middlewares/authMiddleWare");
function route(app) {
  app.use("/news", newRouter);
  app.use("/books", requireAuth, bookRouter);
  app.use("/me", meRouter);
  app.use("/auth", authRouter);
  app.use("/", siteRouter);
}
module.exports = route;
