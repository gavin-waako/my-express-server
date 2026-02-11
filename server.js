const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("Hello world");
  //   res.send("Hello world");
  res.render("index.html");
});

app.listen(3000);
