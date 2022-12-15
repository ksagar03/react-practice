const express = require("express");
const router = express.Router();
const path = require("path");
const app = express();
const port = 7000;

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Templates/index.html"));
});

module.exports = router;
