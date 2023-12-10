const Question = require("../models/question");
const cloudinary = require("../cloudinary");
const questionController = {
  createQuestion: async (req, res) => {
    try {
      const {
        examID,
        questionText,
        correctAnswer,
        grade,
        chapter,
        explanationForAnswer,
        questionCategoryID,
        estimatedMinute,
        imageForQuestion,
        imageForSolution,
        year,
      } = req.body;
      let result2;
      let result1;
      let image;

      if (imageForQuestion) {
        result1 = await cloudinary.uploader.upload(imageForQuestion);
      }

      if (imageForSolution) {
        result2 = await cloudinary.uploader.upload(imageForSolution);
      }

      if (!examID || !questionText || !correctAnswer || !questionCategoryID) {
        return res
          .status(400)
          .json({ success: false, error: "Missing required fields" });
      }

      const newQuestion = await Question.create({
        examID,
        questionText,
        correctAnswer,
        grade,
        chapter,
        explanationForAnswer,
        questionCategoryID,
        estimatedMinute,
        imageForQuestion: {
          public_id: result1?.public_id || "",
          url: result1?.secure_url || "",
        },
        imageForSolution: {
          public_id: result2?.public_id || "",
          url: result2?.secure_url || "",
        },
        year,
      });

      res.status(201).json({ success: true, data: newQuestion });
    } catch (error) {
      console.error("Error creating question:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },

  getQuestionById: async (req, res) => {
    try {
      const { questionID } = req.params;

      const question = await Question.findById(questionID);

      if (!question) {
        return res
          .status(404)
          .json({ success: false, error: "Question not found" });
      }

      res.status(200).json({ success: true, data: question });
    } catch (error) {
      console.error("Error retrieving question by ID:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },

  updateQuestion: async (req, res) => {
    try {
      const { questionID } = req.params;
      const {
        questionText,
        correctAnswer,
        grade,
        chapter,
        explanationForAnswer,
        questionCategoryID,
        estimatedMinute,
        imageForQuestion,
        imageForSolution,
        year,
      } = req.body;

      const updatedQuestion = await Question.findByIdAndUpdate(
        questionID,
        {
          questionText,
          correctAnswer,
          grade,
          chapter,
          explanationForAnswer,
          questionCategoryID,
          estimatedMinute,
          imageForQuestion,
          imageForSolution,
          year,
        },
        { new: true }
      );

      if (!updatedQuestion) {
        return res
          .status(404)
          .json({ success: false, error: "Question not found" });
      }

      res.status(200).json({ success: true, data: updatedQuestion });
    } catch (error) {
      console.error("Error updating question:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },

  deleteQuestion: async (req, res) => {
    try {
      const { questionID } = req.params;

      const deletedQuestion = await Question.findByIdAndDelete(questionID);

      if (!deletedQuestion) {
        return res
          .status(404)
          .json({ success: false, error: "Question not found" });
      }

      res.status(200).json({ success: true, data: deletedQuestion });
    } catch (error) {
      console.error("Error deleting question:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },
};

module.exports = questionController;
