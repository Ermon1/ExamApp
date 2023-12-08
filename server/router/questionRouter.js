const express = require("express");
const questionController = require("../controllers/questionController");

const router = express.Router();

router.post("/api/questions", questionController.createQuestion);
router.get("/api/questions/:questionID", questionController.getQuestionById);
router.put("/api/questions/:questionID", questionController.updateQuestion);
router.delete("/api/questions/:questionID", questionController.deleteQuestion);

module.exports = router;
