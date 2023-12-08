const express = require("express");
const examController = require("../Controller/examController");

const router = express.Router();

router
  .post("/api/exams", examController.createExam)
  .get("/api/exams/:examID", examController.getExamById)
  .put("/api/exams/:examID", examController.updateExam)
  .delete("/api/exams/:examID", examController.deleteExam);

module.exports = router;
