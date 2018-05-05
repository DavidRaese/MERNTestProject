const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./models/User");
require("./services/passport");
const authRoutes = require("./routes/authRoutes");
const keys = require("./config/keys");

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

//connection with mongoDB
mongoose.connect(keys.mongoURI);

authRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is on Port ${PORT}`);
});
