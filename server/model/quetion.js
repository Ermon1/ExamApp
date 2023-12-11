const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  examID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Exam",
    required: true,
  },
  questionText: {
    type: String,
    required: true,
  },
  option: [
    {
      optionText: {
        type: String,
        required: true,
      },
      isCorrect: {
        type: Boolean,
        required: true,
      },
    },
  ],
  grade: String,
  chapter: String,
  explanationForAnswer: String,
  categoryName: {
    type: String,
    required: true,
    enum: ["Cognitive", "easy", "medium", "hard", "memory"],
  },
  estimatedMinute: Number,
  // imageForQuestion: {
  //   public_id: {
  //     type: String,
  //   },
  //   url: {
  //     type: String,
  //   },
  // },
  // imageForSolution: {
  //   public_id: {
  //     type: String,
  //     required: true,
  //   },
  //   url: {
  //     type: String,
  //     required: true,
  //   },
  // },
  year: {
    type: Number,
    required: true,
  },

  Attempted: {
    type: Boolean,
    required: true,
  },
  estimatedMinute: {
    type: Number,
    required: true,
  },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
