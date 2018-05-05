const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const keys = require("./config/keys");

const app = express();
const PORT = process.env.PORT || 3000;

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accsesToken, refreshtoken, profile, done) => {
      console.log("accessToken", accsesToken);
      console.log("profile", profile, "emails", profile.emails);
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    //str google is an internal identifier from GoogleStrategy
    scope: ["profile", "email"] //scope: tells google what we need - userProfile and userEmail
  })
);

app.get("/auth/google/callback", passport.authenticate("google"));

app.listen(PORT, () => {
  console.log(`Server is on Port ${PORT}`);
});
