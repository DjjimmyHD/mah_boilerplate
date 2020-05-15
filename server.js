const app = require("./app");
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`this server is listening to you on ${port}...`);
});
