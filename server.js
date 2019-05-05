require("dotenv").config();
let express = require("express");
let mongoose = require("mongoose");
let app = express();
let PORT = process.env.PORT || 3001;
let passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
let bcrypt = require("bcrypt");
let Schema = mongoose.Schema;
let QRCode = require("qrcode");
let personalData = require("./personalData");

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
  userID: String,
  fullName: String,
  dob: String,
  ssn: String,
  tel: String,
  gender: String,
  bloodType: String,
  allergies: String,
  visits: String,
  qrCode: String
});

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

app.get("/initialLoad", async function(req, res) {
  personalData.map(async person => {
    let personUrl = `https://codefest2019.herokuapp.com//usr=${person.userID}`;

    let qrCode = await QRCode.toString(personUrl, {
      errorCorrectionLevel: "M"
    }).then(url => {
      return JSON.stringify(url);
    });

    let newUser = new User(Object.assign(person, { qrCode }));
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser["ssn"], salt, (err, hash) => {
        if (err) {
          console.log(err);
        }
        newUser["ssn"] = hash;
        newUser.save().catch(err => console.log(err));
      });
    });
  });
});

// app.get("/signup", async function(req, res) {
//   let userID = require("crypto")
//     .randomBytes(10)
//     .toString("hex");

//   let personUrl = `https://codefest2019.herokuapp.com//usr=${userID}`;

//   let newQRCode = await QRCode.toString(personUrl, {
//     errorCorrectionLevel: "M"
//   }).then(url => {
//     return JSON.stringify(url);
//   });

//   let newUser = new User({
//     userID: userID,
//     fullName: req.body.fullName,
//     dob: req.body.dob,
//     ssn: req.body.ssn,
//     tel: req.body.tel,
//     gender: req.body.gender,
//     bloodType: req.body.bloodType,
//     allergies: req.body.allergies,
//     visits: req.body.visits,
//     qrCode: newQRCode
//   });

//   bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(newUser["ssn"], salt, (err, hash) => {
//       if (err) {
//         console.log(err);
//       }
//       newUser["ssn"] = hash;
//       newUser
//         .save()
//         .then(res => res.json(newUser))
//         .catch(err => console.log(err));
//     });
//   });
// });

app.get(
  "/login/usr/:id",
  passport.authenticate("local", {
    failureRedirect: "/login"
  }),
  function(req, res) {
    User.findOneAndUpdate(
      { userID: req.params.id },
      {
        $push: {
          visits: {
            visits: {
              date: "1/3/2019",
              type: "Routine",
              doctor: "Dr Smith",
              physicianNumber: "12238394",
              mrn: 122334,
              diagnosis: "Cancer",
              dischargeDate: "1/5/2009",
              location: "Chop,Philadelphia,PA",
              symptoms: "Chest pain",
              prescription: ["NA"]
            }
          }
        }
      },
      { new: true }
    )
      .then(user => {
        res.json(user); //TODO: return only the last entry in the visits array
      })
      .catch(err => console.log(JSON.stringify(err)));
  }
);

app.get("/login/key/:key/:id", (req, res) => {
  const EMTKEY = ["12345678"];

  if (EMTKEY.includes(req.params.key)) {
    User.find({ userID: req.params.id }).then(user => {
      console.log(user)
      res.json(user);
    });
  }
});


app.get("/login/user/:id/:ssn/:dob", (req, res) => {
  const EMTKEY = ["12345678"];
  const { id, ssn, dob } = req.params;

  User.findOne({
    userID: id,
    ssn,
    dob
  }).then(user => {
    if(!user){
      res.json({user: "none"})
    }
    res.json(user)
  })

});

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
