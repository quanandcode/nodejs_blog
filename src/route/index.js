const bookRouter = require("./books");
const meRouter = require("./me");
const newRouter = require("./news");
const siteRouter = require("./site");
function route(app) {
  app.use("/news", newRouter);
  app.use("/", siteRouter);
  app.use("/books", bookRouter);
  app.use("/me", meRouter);
}
module.exports = route;
