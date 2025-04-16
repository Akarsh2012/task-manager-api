import mongoose, { Document, Schema } from "mongoose";

//  allowed task statuses
export type TaskStatus = "pending" | "in-progress" | "completed";

//  TypeScript interface for a Task document
export interface ITask extends Document {
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: Date;
  updatedAt: Date;
}

//  Mongoose Schema
const TaskSchema: Schema = new Schema<ITask>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed"],
      default: "pending",
    },
  },
  {
    timestamps: true, // auto adds createdAt and updatedAt
  }
);


const Task = mongoose.model<ITask>("Task", TaskSchema);
export default Task;
