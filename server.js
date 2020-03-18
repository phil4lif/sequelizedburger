var express = require("express");
var db = require("./models")
var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");

app.use(routes);
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("server listening on: http://localhost:" + PORT);
    });
})
