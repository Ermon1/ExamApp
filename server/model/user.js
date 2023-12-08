const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Please tell us your name"],
  },

  password: {
    type: String,
    required: [true, "provide your password"],
    minlength: 8,
  },

  role: {
    type: String,
    enum: ["admin", "student", "other"],
    default:"student"
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
