const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());

const ApiRouter = require("./Router/ApiRouter");

app.use("/api", ApiRouter);

const PORT = 8080;

app.listen(PORT, function () {
  console.log(`Listen on http://localhost:${PORT}`);
});
