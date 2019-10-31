require('dotenv').config();
const mongoose = require("mongoose");
const cheerio = require("cheerio");
const express = require("express");
const app = express();
const request = require("request");




var PORT = process.env.PORT || 8080;


app.use(express.static("public"));

require("./routes/htmlRoutes")(app);
// require("./routes/apiRoutes")(app);



var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

app.listen(PORT, function() {
    console.log("Connected on PORT:",PORT);
})