const express = require("express");

const app = express();

app.use(express.static("public"))

app.set("view engine", "ejs");

// runs logger middleware on / route alone
app.get("/", logger, (req, res) => {
  console.log("Hello world");
  res.render("index", { text: "Hello, World!" });
});

app.use(logger);

const userRouter = require("./routes/users");

app.use("/users", userRouter);

// Middleware to log request URLs to console
function logger(req, res, next) {
  console.log("Request URL:", req.originalUrl);
  next();
}

app.listen(3000);
