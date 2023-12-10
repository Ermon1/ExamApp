const Exam = require("../model/exam");

const examController = {
  createExam: async (req, res) => {
    try {
      const newExam = await Exam.create(req.body);

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

      res.status(200).json({ success: true, exam });
    } catch (error) {
      console.error("Error retrieving exam by ID:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },

  getAllExam: async (req, res) => {
    try {
      const exams = await Exam.find();

      if (exams.length === 0) {
        return res
          .status(404)
          .json({ success: false, error: "Exams not found" });
      }

      res.status(200).json({ success: true, data: exams });
    } catch (error) {
      console.error("Error retrieving exams:", error.message);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },

  updateExam: async (req, res) => {
    try {
      const { examID } = req.params;
      console.log(examID);
      const updatedExam = await Exam.findByIdAndUpdate(examID, req.body, {
        new: true,
      });
      console.log(updatedExam);

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
