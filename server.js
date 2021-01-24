// Dependencies
const express = require("express");
const fs = require("fs");

// Express app
var app = express();

// Port
var PORT = process.env.PORT || 8080;

// Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listener, starts server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });