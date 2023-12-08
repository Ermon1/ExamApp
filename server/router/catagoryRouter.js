const express = require("express");
const router = express.Router();
const categoryController = require("../Controller/category.js");

router
  .post("/createcategory", categoryController.createCategory)
  .get("/getalluser", categoryController.getAllCategory)
  .get("/getuserbyid/:id", categoryController.getCategoryById)
  .put("/updatecategory/:id", categoryController.updateCategoryById)
  .delete("/deleteuser/:id", categoryController.deleteCategoryById);
module.exports = router;
