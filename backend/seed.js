import mongoose from "mongoose";
import { Schema } from "mongoose";

const todoSchema = new Schema({
  todo: {
    type: String,
    required: true,
  },
});

await mongoose.connect("mongodb://localhost:27017/todoContainer");
export const Todos = mongoose.model("Todos", todoSchema);

await Todos.create({
  todo: "Create a todo",
});
await Todos.create({
  todo: "Code writing",
});
