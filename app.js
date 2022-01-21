const localhost = "127.0.0.1";
const express = require("express");
const app = express();
const port = 3000;

// Connection to DB
const { Sequelize } = require("sequelize");
const db = new Sequelize("restaurant_full_stack", "postgres", "J14791g!", {
  host: "127.0.0.1",
  dialect: "postgres",
});

// test DB
db.authenticate()
  .then(() => console.log("database connected.."))
  .catch((err) => console.log("Error: " + err));

app.use(express.static("public"));
app.use(express.static("views"));

// register view engine
app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/inexpensive", (req, res) => {
  res.render("pages/inexpensive");
});

app.get("/Moderate", (req, res) => {
  res.render("pages/Moderate");
});

app.get("/expensive", (req, res) => {
  res.render("pages/expensive");
});

app.get("/VeryExpensive", (req, res) => {
  res.render("pages/VeryExpensive");
});

app.listen(port, () => {
  console.log(`Listening at http://${localhost}:${port}`);
});
