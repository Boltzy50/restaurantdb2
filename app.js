const localhost = "127.0.0.1";
const express = require("express");
const app = express();
const port = 3000;
const cookieParser = require("cookie-parser");
const sessions = require("express-session");

// database
const db = require("./config/database");
const models = require("./models");
const res = require("express/lib/response");
const req = require("express/lib/request");

const myusername = "user1";
const mypassword = "mypassword";
let session

// test DB
db.authenticate()
  .then(() => console.log("database connected.."))
  .catch((err) => console.log("Error: " + err));

app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.use(express.static("public"));
app.use(express.static("views"));

// register view engine
app.set("view engine", "ejs");
app.set("views", "views");

app.use(cookieParser());
app.use(
  sessions({
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


app.get("/signup", (req, res) => {
  res.render("pages/signup");
});


app.get("/login", (req, res) => {
  res.render("pages/login");
})

app.post('/login',(req,res) => {
  if(req.body.username == myusername && req.body.password == mypassword){
      session=req.session;
      session.userid=req.body.username;
      console.log(req.session)
      res.send('Welcome to our Site');
  }
  else{
      res.send('Invalid username or password');
  }
})

app.get('/logout',(req,res) => {
  req.session.destroy();
  res.redirect('/');
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

app.get("/veryexpensive", (req, res) => {
  res.render("pages/veryexpensive");
});

app.listen(port, () => {
  console.log(`Listening at http://${localhost}:${port}`);
});
