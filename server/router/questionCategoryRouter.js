const express = require("express");
const router = express.Router();
const questionCategoryController = require("../Controller/questionCatagoryController");

router
  .get(
    "/getallquestioncategory",
    questionCategoryController.getAllQuestionCategories
  )
  .get(
    "/getonequestioncategory/:id",
    questionCategoryController.getOneQuestionCategory
  )
  .post(
    "/createquestioncategory",
    questionCategoryController.createQuestionCategory
  )
  .put(
    "/updatequestioncategory/:id",
    questionCategoryController.updateQuestionCategory
  )
  .delete(
    "/deletequestioncategory/:id",
    questionCategoryController.deleteQuestionCategory
  );

module.exports = router;
