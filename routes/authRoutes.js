const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      //str google is an internal identifier from GoogleStrategy
      scope: ["profile", "email"] //scope: tells google what we need - userProfile and userEmail
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));
};
