const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
    enum: [
      "Chemistry",
      "Mathematics",
      "Physics",
      "Biology",
      "English",
      "Amharic",
      "Geography",
      "History",
      "Civics",
      "Aptitude",
      "Other",
    ],
  },

  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  givenTime: {
    type: String,
    required: true,
  },
  code: {
    type: Number,
    unique: true,
  },
  categoryName: {
    type: String,
    required: true,
    enum: ["Entrance", "Model", "AI generated", "Exit Exam Model", "Other"],
  },
  thumbnail: {
    type: String,
  },
  questionIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
    },
  ],
  year: {
    type: Number,
    required:true
  }
});

const Exam = mongoose.model("Exam", examSchema);

module.exports = Exam;
