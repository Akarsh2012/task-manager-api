import { Request, Response } from "express";
import Task from "../models/task"; 

// Create a Task
export const createTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { title, description, status } = req.body;
  try {
    const newTask = new Task({
      title,
      description,
      status,
    });

    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: "Failed to create task", error: err });
  }
};

// Get All Tasks with Pagination and Filtering by Status
export const getTasks = async (req: Request, res: Response): Promise<void> => {
  const { page = 1, limit = 10, status } = req.query;

  // Default query object
  const query: any = {};

  // If a status is provided, filter by it
  if (status) {
    query.status = status;
  }

  try {
    // Fetch tasks with pagination and filtering
    const tasks = await Task.find(query)
      .skip((Number(page) - 1) * Number(limit)) // Skip based on page number
      .limit(Number(limit)); // Limit the number of tasks per page

    // Get the total count of tasks matching the query (for pagination)
    const totalTasks = await Task.countDocuments(query);

    // Return tasks with pagination info
    res.status(200).json({
      tasks,
      totalTasks,
      totalPages: Math.ceil(totalTasks / Number(limit)), // Calculate total pages
      currentPage: Number(page),
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to get tasks", error: err });
  }
};

// Get Task by ID
export const getTaskById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (!task) {
      res.status(404).json({ message: "Task not found" });
    } else {
      res.status(200).json(task);
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to get task", error: err });
  }
};

// Update Task
export const updateTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, description, status },
      { new: true }
    );
    if (!updatedTask) {
      res.status(404).json({ message: "Task not found" });
    } else {
      res.status(200).json(updatedTask);
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to update task", error: err });
  }
};

// Delete Task
export const deleteTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      res.status(404).json({ message: "Task not found" });
    } else {
      res.status(200).json({ message: "Task deleted successfully" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to delete task", error: err });
  }
};
