const bookRouter = require("./books");
const meRouter = require("./me");
const newRouter = require("./news");
const siteRouter = require("./site");
const authRouter = require("./auth");
function route(app) {
  app.use("/news", newRouter);
  app.use("/", siteRouter);
  app.use("/books", bookRouter);
  app.use("/me", meRouter);
  app.use("/auth", authRouter);
}
module.exports = route;
