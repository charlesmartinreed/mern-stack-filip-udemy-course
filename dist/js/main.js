"use strict";

var express = require("express"),
    app = express(),
    port = 8055;

app.get("/", function (req, res) {
  res.send("hello world!");
});
app.listen(port, function () {
  return console.log("Example app is now listening on port ".concat(port, "!"));
});