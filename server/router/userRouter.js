const express = require("express");
const router = express.Router();
const userController = require("../Controller/userController/userController");

router
  .post("/createUser", userController.userRegistration)
  .get("/getUsers", userController.getAllUsers)
  .get("/getUser", userController.getUser)
  .get("/getUser/:userId", userController.getUserById)
  .put("/update/:userId", userController.updateUser)
  .delete("/deletebyusername/:username", userController.deleteUserByUserName)
  .delete("/deletebyid/:userId", userController.deleteUserByUserId);

module.exports = router;
