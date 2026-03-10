const express = require("express");
const session = require("express-session");
const path = require("path");

const errorHandler = require("./middleware/errorHandler");
const ensureAdminExists = require("./utils/ensureAdminExists");

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
  }),
);

ensureAdminExists();

app.use("/api", require("./routes"));
app.use(errorHandler);

module.exports = app;
