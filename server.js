require("dotenv").config();
let express = require("express");
let mongoose = require("mongoose");
let app = express();
let PORT = process.env.PORT || 3001;
let passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlaintextPassword = "s0//P4$$w0rD";
const someOtherPlaintextPassword = "not_bacon";

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI);
mongoose
  .connect("mongodb://admin:codefest2019@ds151486.mlab.com:51486/codefest")
  .then(() => console.log("Connected"))
  .catch(err => console.log(JSON.stringify(err)));

let User = mongoose.model("User", {
  fullName: String,
  dob: String,
  ssn: String,
  tel: String,
  gender: String,
  bloodType: String,
  allergies: String,
  userID: String
});

let Visit = mongoose.model("Visit", {
  date: String,
  type: String,
  doctor: String,
  physicanNumber: String,
  mrn: Number,
  diagnosis: String,
  dischargeDate: String,
  location: String,
  symptoms: String,
  perscription: Array,
  userID: String
});

// let newUser = new User({
//   id: "1232432",
//   fullName: "Mitchell Philmore",
//   dob: "7/22/1987",
//   ssn: "123456789",
//   tel: "215-555-5555",
//   gender: "M",
//   bloodType: "A+",
//   allergies: ["NA"]
// });

let newVisit = new Visit({
  date: "1/3/1998",
  type: "Routine",
  doctor: "Dr Smith",
  physicanNumber: "12238394",
  mrn: 122334,
  diagnosis: "Cancer",
  dischargeDate: "1/5/2009",
  location: "Chop,Philadelphia,PA",
  symptoms: "Chest pain",
  perscription: ["NA"],
  userID: "1232432"
});

// newUser
//   .save()
//   .then(() => {
//     console.log("Saved");
//   })
//   .catch(err => JSON.stringify(err));

newVisit
  .save()
  .then(() => {
    console.log("Saved");
  })
  .catch(err => JSON.stringify(err));

passport.use(
  new LocalStrategy(
    // Our user will sign in using dob, rather than a "username or email"
    {
      dob: "Date of Birth"
    },
    function(dob, ssn, done) {
      // When a user tries to sign in this code runs
      User.findOne({
        where: {
          dob: dob
        }
      }).then(function(dbUser) {
        // If there's no user with the given info
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect input."
          });
        }
        // If there is a user with the given email, but the password the user gives us is incorrect
        else if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect password."
          });
        }
        // If none of the above, return the user
        return done(null, dbUser);
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

app.get("/signup", function(req, res) {
  let newUser = new User({
    userID: "1232432",
    fullName: "Mitchell Philmore",
    dob: "7/22/1987",
    ssn: "123456789",
    tel: "215-555-5555",
    gender: "M",
    bloodType: "A+",
    allergies: "NA"
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser["ssn"], salt, (err, hash) => {
      if (err) {
        console.log(err);
      }
      newUser["ssn"] = hash;
      newUser
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
    });
  });
});

app.get(
  "/login/usr/:id",
  // passport.authenticate("local", {
  //   failureRedirect: "/login"
  // }),
  function(req, res) {
    User.findOne({ userID: req.params.id }, function(err, obj) {
      res.json(obj);
    }).catch(err => console.log("can't find this user"));
  }
);

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
