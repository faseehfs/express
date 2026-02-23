const router = require("express").Router();
const connection = require("../db");

router.get("/hello", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

router.get("/all-users", (req, res) => {
  connection.query("SELECT * FROM users", (err, rows, fields) => {
    res.json({ rows: rows });
  });
});

module.exports = router;
