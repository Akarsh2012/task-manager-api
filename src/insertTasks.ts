import dotenv from "dotenv";
import mongoose from "mongoose";
import Task from "./models/task";

dotenv.config();

const insertTasks = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      console.error("Mongo URI not found in .env");
      return;
    }

    await mongoose.connect(mongoUri);

    // Insert 25 tasks into the database
    const tasks = Array.from({ length: 25 }, (_, index) => ({
      title: `Task ${index + 1}`,
      description: `Description for task ${index + 1}`,
      status:
        index % 3 === 0
          ? "pending"
          : index % 3 === 1
          ? "completed"
          : "in-progress", // Alternate status
    }));

    await Task.insertMany(tasks);

    console.log("25 tasks inserted successfully!");
    mongoose.disconnect();
  } catch (err) {
    console.error("Error inserting tasks:", err);
    mongoose.disconnect();
  }
};

insertTasks();
