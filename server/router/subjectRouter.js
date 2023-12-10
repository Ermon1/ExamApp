const express = require("express");
const router = express.Router();
const subjectController = require("../Controller/subject");

router
  .post("/", subjectController.createSubject)
  .get("/", subjectController.getAllSubjects)
  .get("/:id", subjectController.getOneSubject)
  .put("/:id", subjectController.updateSubject)
  .delete("/:id", subjectController.deleteSubject);

module.exports = router;
