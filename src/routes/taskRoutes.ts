import express from "express";
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/taskControllers"; // Correctly import controller functions

const router = express.Router();

// Define the routes
router.get("/tasks", getTasks); // Get all tasks
router.post("/tasks", createTask); // Create a new task
router.get("/tasks/:id", getTaskById); // Get task by ID
router.put("/tasks/:id", updateTask); // Update task by ID
router.delete("/tasks/:id", deleteTask); // Delete task by ID

export default router;
