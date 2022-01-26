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

// INEXPENSIVE START
app.get("/inexpensive", async (req, res) => {
  const restaurants = await models.Restaurants.findAll({
    where: {
      price: "$",
    },
  });
  const reviews = await models.reviews.findAll();
  res.render("pages/inexpensive", {
    restaurants: restaurants,
    reviews: reviews,
  });
});
// INEXPENSIVE END

// MODERATE START
app.get("/Moderate", async (req, res) => {
  const restaurants = await models.Restaurants.findAll({
    where: {
      price: "$$",
    },
  });
  const reviews = await models.reviews.findAll();
  res.render("pages/Moderate", {
    restaurants: restaurants,
    reviews: reviews,
  });
});
// MODERATE END

// EXPENSIVE START
app.get("/expensive", async (req, res) => {
  const restaurants = await models.Restaurants.findAll({
    where: {
      price: "$$$",
    },
  });
  const reviews = await models.reviews.findAll();
  res.render("pages/expensive", {
    restaurants: restaurants,
    reviews: reviews,
  });
});
// EXPENSIVE END

// VERY EXPENSIVE START
app.get("/veryexpensive", async (req, res) => {
  const restaurants = await models.Restaurants.findAll({
    where: {
      price: "$$$$",
    },
  });
  const reviews = await models.reviews.findAll();
  res.render("pages/veryexpensive", {
    restaurants: restaurants,
    reviews: reviews,
  });
});
// VERY EXPENSIVE END

app.listen(port, () => {
  console.log(`Listening at http://${localhost}:${port}`);
});
