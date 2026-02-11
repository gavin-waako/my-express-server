const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("Hello world");
  res.render("index", { text: "Hello, World!" });
});

app.listen(3000);
