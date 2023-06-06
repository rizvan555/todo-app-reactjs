import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/todoContainer/todos", async (req, res) => {
  try {
    res.status(200).json({ message: "Hello World" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

app.post("/todoContainer/todos", (req, res) => {
  try {
    const data = req.body;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

app.listen(PORT, () => {});
