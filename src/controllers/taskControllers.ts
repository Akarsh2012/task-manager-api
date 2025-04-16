import { Request, Response } from "express";
import Task from "../models/task"; // Assuming you have a Task model

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

// Get All Tasks
export const getTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
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
