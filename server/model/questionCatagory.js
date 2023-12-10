const mongoose = require("mongoose");

const questionCategorySchema = new mongoose.Schema({
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
