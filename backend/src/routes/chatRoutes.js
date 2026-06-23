import express from "express";
import { chatHandler } from "../controllers/chatController.js";
import { getTasks } from "../services/memoryService.js";

const router = express.Router();

router.post("/", chatHandler);

// NEW ROUTE → get all tasks
router.get("/tasks", (req, res) => {
  res.json({ tasks: getTasks() });
});

export default router;