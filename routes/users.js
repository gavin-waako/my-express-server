const express = require("express");
const router = express.Router();

// Static routes

router.get("/new", (req, res) => {
  res.render("users/new", { firstName: "Test" });
});

router.post("/", (req, res) => {
  const isValid = true;
  if (isValid) {
    users.push({ name: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("Error :");
    res.render("users/new", { firstName: req.body.firstName });
  }
  res.send("Hi, " + req.body.firstName);
});

// Dynamic Routes
router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get user with ID: ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update user with ID: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user with ID: ${req.params.id}`);
  });

// Sample user data
const users = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];

// Middleware
router.param("id", (req, res, next, userID) => {
  req.user = users[userID - 1];
  next();
});

module.exports = router;
