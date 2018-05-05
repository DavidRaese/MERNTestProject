const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");

const keys = require("../config/keys");

//gets user model from mongodb, this is importent for testing
const User = mongoose.model("users");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accsesToken, refreshtoken, profile, done) => {
      //1. create modelinstance
      const newUser = new User({ googleID: profile.id });
      //2. save modelinstance to mongodb
      newUser.save();
    }
  )
);
