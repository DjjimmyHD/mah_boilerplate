const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res, next) => {
  res.send("🐲🐲🐲🐲🐲🐲🐲");
});

app.listen(port, () => {
  console.log(`this server is listening to you on ${port} ....?????`);
});
