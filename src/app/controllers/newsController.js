class NewsController {
  index(req, res) {
    res.render("new");
  }
  show(req, res) {
    res.send("News Details");
  }
}
module.exports = new NewsController();
