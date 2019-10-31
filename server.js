require('dotenv').config();
const express = require("express");
// const ehbs = require('express-handlebars');
const mongoose = require("mongoose");
const cheerio = require("cheerio");
const axios = require('axios');

// var logger = require("morgan");
// const request = require("request");

const app = express();


// Use morgan logger for logging requests
// app.use(logger("dev"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));



var PORT = process.env.PORT || 8080;

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);


// process.env.MONGODB_URI || 
var MONGODB_URI = "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI);

app.listen(PORT, function() {
    console.log("Connected on PORT:",PORT);
})