require('dotenv').config();
const express = require("express");
// const ehbs = require('express-handlebars');
const mongoose = require("mongoose");
const cheerio = require("cheerio");
const axios = require('axios');

// const request = require("request");

const app = express();



var PORT = process.env.PORT || 8080;


app.use(express.static("public"));

require("./routes/htmlRoutes")(app);
// require("./routes/apiRoutes")(app);



var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

app.listen(PORT, function() {
    console.log("Connected on PORT:",PORT);
})