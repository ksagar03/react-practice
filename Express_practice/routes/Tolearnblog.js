const express = require("express");
const router = express.Router();
const path = require("path");
const Tolearn = require("../data/Tolearn.js");
const app = express();
const port = 7000;

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Templates/index.html"));
});

router.get("/Tolearn", (req, res) => {
  Tolearn.map((e) => {
  });
});

module.exports = router;
