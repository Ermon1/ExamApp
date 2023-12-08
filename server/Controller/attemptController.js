
const Attempt = require("../models/attempt");

const attemptController = {
  createAttempt: async (req, res) => {
    try {
      const { userID, attemptType, questionID, correctlyAnswered, attempted } =
        req.body;

      // Validate the required data
      if (!userID || !attemptType || !questionID || !attempted) {
        return res
          .status(400)
          .json({ success: false, error: "Missing required fields" });
      }

      const newAttempt = await Attempt.create({
        userID,
        attemptType,
        questionID,
        correctlyAnswered,
        attempted,
      });

      res.status(201).json({ success: true, data: newAttempt });
    } catch (error) {
      console.error("Error creating attempt:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },

  getAttemptById: async (req, res) => {
    try {
      const { attemptId } = req.params;

      const attempt = await Attempt.findById(attemptId);

      if (!attempt) {
        return res
          .status(404)
          .json({ success: false, error: "Attempt not found" });
      }

      res.status(200).json({ success: true, data: attempt });
    } catch (error) {
      console.error("Error retrieving attempt by ID:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },

  updateAttempt: async (req, res) => {
    try {
      const { attemptId } = req.params;
      const { correctlyAnswered, attempted } = req.body;

      const updatedAttempt = await Attempt.findByIdAndUpdate(
        attemptId,
        { correctlyAnswered, attempted },
        { new: true }
      );

      if (!updatedAttempt) {
        return res
          .status(404)
          .json({ success: false, error: "Attempt not found" });
      }

      res.status(200).json({ success: true, data: updatedAttempt });
    } catch (error) {
      console.error("Error updating attempt:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },

  deleteAttempt: async (req, res) => {
    try {
      const { attemptId } = req.params;

      const deletedAttempt = await Attempt.findByIdAndDelete(attemptId);

      if (!deletedAttempt) {
        return res
          .status(404)
          .json({ success: false, error: "Attempt not found" });
      }

      res.status(200).json({ success: true, data: deletedAttempt });
    } catch (error) {
      console.error("Error deleting attempt:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },
};

module.exports = attemptController;
