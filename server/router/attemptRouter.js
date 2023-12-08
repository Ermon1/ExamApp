const express = require("express");
const attemptController = require("../controllers/attemptController"); // Adjust the path based on your project structure

const router = express.Router();

router.post("/api/attempts", attemptController.createAttempt);
router.get("/api/attempts/:attemptId", attemptController.getAttemptById);
router.put("/api/attempts/:attemptId", attemptController.updateAttempt);
router.delete("/api/attempts/:attemptId", attemptController.deleteAttempt);

module.exports = router;
