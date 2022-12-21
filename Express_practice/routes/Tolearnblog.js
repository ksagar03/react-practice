const express = require("express");
const router = express.Router();
const path = require("path");
const Tolearn = require("../data/Tolearn.js");
const app = express();
const port = 7000;
// import { title } from "process";
// import Todisplay from "./Templates/Todisplay.jsx";

router.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "../Templates/index.html"));
  res.render("home");
});

// router.get("/Tolearn", (req, res) => {
//   res.send(
//     Tolearn.map((e) => {
//       <Todisplay
//         key={e.key}
//         title={e.title}
//         content={e.content}
//         more_info={e.more_info}
//       />;
//     })
//   );
// });

module.exports = router;
