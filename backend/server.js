import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import { Todos } from "./seed.js";

await mongoose.connect("mongodb://localhost:27017/todoContainer");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get("/todoContainer/todos", async (req, res) => {
  try {
    const todos = await Todos.find();
    res.send(todos);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

app.post("/todoContainer/todos", async (req, res) => {
  try {
    const newTodo = await Todos.create(req.body);
    res.status(201).json(newTodo);
  } catch (error) {
    console.error("Error creating todo:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

app.listen(PORT, () => {});
