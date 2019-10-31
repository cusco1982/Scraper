require('dotenv').config();
const mongoose = require("mongoose");
const cheerio = require("cheerio");
const express = require("express");
const app = express();



var PORT = process.env.PORT || 8080;


app.use(express.static("public"));



var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

app.listen(PORT, function() {
    console.log("Connected on PORT:",PORT);
})