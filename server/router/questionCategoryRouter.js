// routes/questionCategoryRouter.js
const express = require("express");
const router = express.Router();
const questionCategoryController = require("../controllers/questionCategoryController");

// Routes for question categories
router
  .get("/", questionCategoryController.getAllQuestionCategories)
  .get("/:id", questionCategoryController.getOneQuestionCategory)
  .post("/", questionCategoryController.createQuestionCategory)
  .put("/:id", questionCategoryController.updateQuestionCategory)
  .delete("/:id", questionCategoryController.deleteQuestionCategory);

module.exports = router;
