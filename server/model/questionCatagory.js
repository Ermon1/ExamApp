const mongoose = require("mongoose");

const questionCategorySchema = new mongoose.Schema({
  questionCategoryID: {
    type: Number,
    required: true,
    unique: true,
  },
  categoryName: {
    type: String,
    required: true,
    enum: ["Cognitive", "Easy", "Medium", "Hard", "Memory", "Other"],
  },
});

const QuestionCategory = mongoose.model(
  "QuestionCategory",
  questionCategorySchema
);

module.exports = QuestionCategory;
