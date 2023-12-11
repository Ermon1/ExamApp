const express = require("express");
const questionController = require("../Controller/questionController");

const router = express.Router();

router
  .post("/createquestion", questionController.createQuestion)
  .put("/:questionID", questionController.updateQuestion)
  .delete("/:questionID", questionController.deleteQuestion)
  .get("/getallquestion", questionController.getAllQuestion)
  .get("/:questionID", questionController.getQuestionById);

module.exports = router;
