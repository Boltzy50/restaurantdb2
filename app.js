const localhost = "127.0.0.1";
const express = require("express");
const app = express();
const port = 3000;
const cookieParser = require("cookie-parser");
const session = require("express-session");

// database
const db = require("./config/database");
const models = require("./models");
const res = require("express/lib/response");
const req = require("express/lib/request");

// test DB
db.authenticate()
  .then(() => console.log("database connected.."))
  .catch((err) => console.log("Error: " + err));

app.use(express.static("public"));
app.use(express.static("views"));

// register view engine
app.set("view engine", "ejs");
app.set("views", "views");

app.use(cookieParser());
app.use(
  session({
    secret: "secret", //used to sign the cookie
    resave: false, //update session w/ no changes
    saveUninitialized: true, //always create a session
    cookie: {
      secure: false, //true: only accept https req's
      maxAge: 2592000,
    },
  })
);

app.get("/", async (req, res) => {
  const restaurants = await models.Restaurants.findAll();
  res.render("pages/index", {
    restaurants: restaurants,
  });
});

app.get("/login", (req, res) => {
  res.render("pages/login");
});

// app.post('/login', (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;
//   //fake db lookup function
//   fakeFunctionToGetuserData(username, password)
//     .then((user) => {
//       //login success
//       req.session.user = user;
//       res.redirect('/dashboard')
//     })
//     .catch((err) => {
//       //login error
//       res.redirect('/login?login_status=fail');
//     });
// });

app.get("/inexpensive", (req, res) => {
  res.render("pages/inexpensive");
});

app.get("/Moderate", (req, res) => {
  res.render("pages/Moderate");
});

app.get("/expensive", (req, res) => {
  res.render("pages/expensive");
});

app.get("/veryexpensive", (req, res) => {
  res.render("pages/veryexpensive");
});

app.listen(port, () => {
  console.log(`Listening at http://${localhost}:${port}`);
});
