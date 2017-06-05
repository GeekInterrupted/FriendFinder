var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');

var app = express();

//file that will store friends array
var friends = require('./app/data/friends.js');

//set an initial port - user will be able to select port, if not selected it will default to port 3000
var PORT = process.env.PORT || 3000;

//serve static content for the app from the public directory in the application directory.
app.use(express.static(__dirname + "/app/public"));

//standard body-parser code
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
//==========================================

//ROUTER
//point server to a series of route files

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//LISTENER
//start server to begin listening

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});