require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const session = require("express-session");
let passport = require("passport");
let GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use(session({
//   secret: "keyboard cat",
//   resave: true,
//   saveUninitialized: true
// }));
app.use(passport.initialize());
app.use(passport.session());

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/healthcare");

let User = mongoose.model("User", {
  personal: {
    fullName: String,
    dob: String,
    ssn: String,
    tel: String,
    gender: String,
    bloodType: String,
    allergies: String
  },
  visit: {
    date: String,
    type: Array,
    doctor: String,
    physicanNumber: String,
    mrn: Number,
    diagnosis: String,
    dischargeDate: String,
    location: String,
    symptoms: Array,
    perscription: Array
  }
});

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://www.example.com/auth/google/callback" // TODO: change this url to our heroku url /auth/google/callback
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOrCreate({ googleId: profile.id }, function(err, user) {
        //TODO: connect to user in DB
        return done(err, user);
      });
    }
  )
);

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

app.get("/dashboard", (req, res) => {
  res.send("Welcome Home");
});

// Scope will be heroku main page
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login"]
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function(req, res) {
    res.redirect("/login");
  }
);

app.get("/login", (req, res) => {
  res.send("Login page");
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
