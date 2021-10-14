const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

const PORT = 8080;

app.listen(PORT, function () {
  console.log(`Listen on http://localhost:${PORT}`);
});
