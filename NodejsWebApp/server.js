var http = require("http");
var express = require("express");
var app = express();
var controllers = require("./controllers");


// set the view engines
//var ejsEngne = require("ejs-locals");
//app.engine("ejs", ejsEngne);
//app.set("view engine", "ejs");
//app.set("view engine", "jade");
app.set("view engine", "vash"); 

// map the routes or controllers
controllers.init(app);

var server = http.createServer(app);

server.listen(3000);