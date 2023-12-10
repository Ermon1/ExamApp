const Exam = require("../model/exam");

const examController = {
  createExam: async (req, res) => {
    try {
      const {
        subjectID,
        title,
        description,
        givenTime,
        categoryID,
        attempted,
      } = req.body;

      if (!subjectID || !title || !givenTime || !categoryID) {
        return res
          .status(400)
          .json({ success: false, error: "Missing required fields" });
      }

      const newExam = await Exam.create({
        subjectID,
        title,
        description,
        givenTime,
        categoryID,
        attempted,
      });

      res.status(201).json({ success: true, data: newExam });
    } catch (error) {
      console.error("Error creating exam:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },

  getExamById: async (req, res) => {
    try {
      const { examID } = req.params;

      const exam = await Exam.findById(examID);

      if (!exam) {
        return res
          .status(404)
          .json({ success: false, error: "Exam not found" });
      }

      res.status(200).json({ success: true, data: exam });
    } catch (error) {
      console.error("Error retrieving exam by ID:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },

  updateExam: async (req, res) => {
    try {
      const { examID } = req.params;
      const { title, description, givenTime, categoryID, attempted } = req.body;

      const updatedExam = await Exam.findByIdAndUpdate(
        examID,
        { title, description, givenTime, categoryID, attempted },
        { new: true }
      );

      if (!updatedExam) {
        return res
          .status(404)
          .json({ success: false, error: "Exam not found" });
      }

      res.status(200).json({ success: true, data: updatedExam });
    } catch (error) {
      console.error("Error updating exam:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },

  deleteExam: async (req, res) => {
    try {
      const { examID } = req.params;

      const deletedExam = await Exam.findByIdAndDelete(examID);

      if (!deletedExam) {
        return res
          .status(404)
          .json({ success: false, error: "Exam not found" });
      }

      res.status(200).json({ success: true, data: deletedExam });
    } catch (error) {
      console.error("Error deleting exam:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },
};

module.exports = examController;
