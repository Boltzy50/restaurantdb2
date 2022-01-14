const localhost = "127.0.0.1";
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("views"));
// register view engine
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(__dirname + "/css"));


app.get("/", (req, res) => {
  res.render("pages/index");
});

app.listen(port, () => {
  console.log(`Listening at http://${localhost}:${port}`);
});
