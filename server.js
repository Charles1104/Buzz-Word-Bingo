const express = require('express');
const bodyParser = require("body-parser");
const buzzwordRoutes = require('./routes/buzzword.js');
const app = express();
const PORT = 3000;

// respond with contact form on the contact page
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/buzzword", buzzwordRoutes),

app.get("*", (req, res) => {
  res.send("404");
});

var server = app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});