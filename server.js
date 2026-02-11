const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("Hello world");
  res.render("index", { text: "Hello, World!" });
});

app.get("/users", (req, res) => {
  res.send("Users endpoint");
});

app.get("/users/new", (req, res) => {
  res.send("New users form.");
});

app.listen(3000);
