const { multiMongooseToObject } = require("../../util/mongoose");
const Course = require("../model/Course");
class siteController {
  index(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render("home", {
          courses: multiMongooseToObject(courses),
        })
      )
      .catch((error) => next(error));
    // res.render("home");
  }
  search(req, res) {
    res.render("search");
  }
}
module.exports = new siteController();
