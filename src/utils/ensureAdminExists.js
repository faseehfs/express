const userModel = require("../models/userModel");
const userService = require("../services/userService");
const bcrypt = require("bcrypt");

async function ensureAdminExists() {
  const user = await userModel.getUserByUsername("admin");
  if (!user) {
    userService.createNewUser(
      "admin",
      process.env.ADMIN_EMAIL,
      process.env.ADMIN_PASSWORD,
      "admin",
    );

    console.log("Created admin");
  }
}

module.exports = ensureAdminExists;
