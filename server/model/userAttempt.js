const mongoose = require("mongoose");

const attemptSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  attemptType: {
    type: String,
    enum: ["Study Based", "Exam Based"],
    required: true,
  },
  questionID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
    required: true,
  },
  correctlyAnswered: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
    },
  ],
  attempted: {
    type: Number,
    required: true,
  },
});

const Attempt = mongoose.model("Attempt", attemptSchema);

module.exports = Attempt;
