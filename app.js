require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const { NODE_ENV } = require("./config");
const app = express();

app.use(
  morgan(NODE_ENV === "production" ? "tiny" : "common", {
    skip: () => NODE_ENV === "test",
  })
);

app.get("/", (req, res, next) => {
  res.send("🥳🥳🥳🥳🥳🥳");
});

module.exports = app;
