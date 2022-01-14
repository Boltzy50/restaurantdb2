const localhost = "127.0.0.1";
const express = require("express");
const app = express();
const port = 3000;

// register view engine
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(__dirname + "/public"));


app.get("/", (req, res) => {
  res.render("pages/index");
});

app.listen(port, () => {
  console.log(`Listening at http://${localhost}:${port}`);
});
