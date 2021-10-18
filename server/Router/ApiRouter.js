const express = require("express");
const router = express.Router();
const func = require("../utils/getAllMovie");

const movies = func.getAllMovie();

// middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//   console.log("Time: ", Date.now());
//   next();
// });

// define the home page route
router.get("/getAllMovie", function (req, res) {
  return res.json({ movies: movies });
});

// define the about route
router.get("/about", function (req, res) {
  res.json("About birds");
});

module.exports = router;
