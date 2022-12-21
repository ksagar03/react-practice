const path = require("path");
const express = require("express");
const app = express();
const port = 7000;
const create = require("express-handlebars");

app.engine("handlebars", create.engine());
app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, "static")));
app.use("/", require(path.join(__dirname, "/routes/Tolearnblog")));

app.listen(port, () => {
  console.log(`this website is working on http://localhost:${port}`);
});

/*
app.get("/send/:name", (req, res) => {
  res.send("hello this is" + " " + req.params.name);
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/json", (req, res) => {
  res.json({
    sagar: 10,
    surya: 20,
  });
});
 */
