const { urlencoded, json } = require("express");
const express = require("express");
const { engine } = require("express-handlebars");
var methodOverride = require("method-override");
const sortMiddleWare = require("./app/middlewares/sortMiddleWare");
const morgan = require("morgan");
const path = require("path");
const app = express();
const db = require("./config/db/index");
const port = 3000;
const route = require("./route/index");
const { log } = require("console");
// HTTP logger
// app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum: function (a, b) {
        return a + b;
      },
      sortable: (field, sort) => {
        const sortStateNext = sort.column == field ? sort.type : "default";

        const icons = {
          default: "fa-solid fa-sort",
          asc: "fa-solid fa-arrow-down-short-wide",
          desc: "fa-solid fa-arrow-down-wide-short",
        };
        const types = {
          default: "desc",
          desc: "asc",
          asc: "desc",
        };
        let icon = icons[sortStateNext];
        let type = types[sortStateNext];
        return `<a href="?_sort&column=${field}&type=${type}">
                  <i class="${icon}"></i>  
                </a>`;
      },
    },
  })
);
//add middleware
app.use(sortMiddleWare);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource", "views"));
//set use static file
app.use(express.static("src/public/"));
// set up route
//connect database
db.connect();
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());
app.use(methodOverride("X-HTTP-Method-Override"));
app.use(methodOverride("_method"));
route(app);
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
