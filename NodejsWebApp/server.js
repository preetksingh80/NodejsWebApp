var http = require("http");
var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var controllers = require("./controllers");


// set the view engines
//var ejsEngne = require("ejs-locals");
//app.engine("ejs", ejsEngne);
//app.set("view engine", "ejs");
//app.set("view engine", "jade");
app.set("view engine", "vash"); 

// require services
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//set up the static public files
app.use(express.static(__dirname + "/public"));

// map the routes or controllers
controllers.init(app);

var server = http.createServer(app);
 
server.listen(3000);
console.log("Server Started and listening at port 3000")