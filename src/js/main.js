const express = require("express"),
  app = express(),
  port = 8055;

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(port, () =>
  console.log(`Example app is now listening on port ${port}!`)
);
