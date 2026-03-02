const connection = require("../config/db");

function getAllUsers(callback) {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM users", (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
}

function createNewUser(username, email, password_hash, callback) {
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)",
      [username, email, password_hash],
      (err, result) => {
        if (err) return reject(err);
        resolve(result);
      },
    );
  });
}

module.exports = { getAllUsers, createNewUser };
