const express = require("express");
const questionController = require("../controllers/questionController");

const router = express.Router();

router
  .post("/api/questions", questionController.createQuestion)
  .put("/api/questions/:questionID", questionController.updateQuestion)
  .delete("/api/questions/:questionID", questionController.deleteQuestion)
  .get("/api/questions/:questionID", questionController.getQuestionById);

module.exports = router;
