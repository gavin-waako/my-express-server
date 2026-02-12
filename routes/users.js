const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Users endpoint");
});

router.get("/new", (req, res) => {
  res.send("New users form.");
});

router.post("/", (req, res) => {
  res.send("Create user.");
});

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

const users = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
router.param("id", (req, res, next, userID) => {
  req.user = users[userID - 1];
  next();
});

module.exports = router;
