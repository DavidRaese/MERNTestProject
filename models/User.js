const mongoose = require("mongoose");

const { Schema } = mongoose;

//define userSchema
const userSchema = new Schema({
  googleID: {
    type: String,
    required: true,
    unique: true
  }
});

//create userSchema
mongoose.model("users", userSchema);
