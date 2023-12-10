
const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  examTitle: {
    type: String,
    required: true,
  },
  examDescription: String,
});

const Exam = mongoose.model("Exam", examSchema);

module.exports = Exam;
