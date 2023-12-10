const express = require("express");
const examController = require("../Controller/examController");

const router = express.Router();

router
  .post("/createxam", examController.createExam)
  .get("/:examID", examController.getAllExam)
  .get("/allexam", examController.getExamById)
  .put("/:examID", examController.updateExam)
  .delete("/:examID", examController.deleteExam);

module.exports = router;
