const express = require("express");
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.post("/output", function (req, res) {
  console.log(req.body);
  res.send("output success")
});

app.listen(process.env.PORT || 8080, function () {
  console.log("Website listening on port 3000 !");
});
