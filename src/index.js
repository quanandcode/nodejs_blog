const express = require("express");
const { engine } = require("express-handlebars");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = 3000;

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource/views"));
//set use static file
app.use(express.static("src/public"));
// method
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("new");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
