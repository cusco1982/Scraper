const express = require("express");
const mongoose = require("mongoose");
const cheerio = require("cheerio");
require('dotenv').config();



var PORT = process.env.PORT || 8080;





var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

app.listen(PORT, function() {
    console.log("Connected on PORT:",PORT);
})