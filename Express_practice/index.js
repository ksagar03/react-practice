const express = require("express");
const app = express();
const port = 7000;

app.get("/", (req, res)=>{
  res.send("hello this is sagar");
});

app.listen(port, () => {
  console.log(`this website is working on ${port}`);
});
