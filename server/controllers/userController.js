const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

async function getAllUsers(req, res, next) {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(400).json({ error: "The server encountered an error." });
  }
}

async function createNewUser(req, res, next) {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);
    const result = await userModel.createNewUser(
      req.body.username,
      req.body.email,
      hash,
    );
    res.json({ message: "User created" });
  } catch (err) {
    next(err);
  }
}

module.exports = { getAllUsers, createNewUser };
