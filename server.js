const express = require("express");
const mongoose = require("mongoose");
require("./models/User");
require("./services/passport");
const authRoutes = require("./routes/authRoutes");
const keys = require("./config/keys");

const app = express();
const PORT = process.env.PORT || 3000;

//connection with mongoDB
mongoose.connect(keys.mongoURI);

authRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is on Port ${PORT}`);
});
