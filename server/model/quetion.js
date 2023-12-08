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
  correctAnswer: {
    type: String,
    required: true,
  },
  grade: String,
  chapter: String,
  explanationForAnswer: String,
  questionCategoryID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "QuestionCategory",
    required: true,
  },
  estimatedMinute: Number,
  imageForQuestion: String,
  imageForSolution: String,
  year: Number,
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
