var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
require("./app/routing/apiRoutes.js")(app);
app.use(express.static("app/public"));


require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, () => console.log("listening on port %s", PORT));
