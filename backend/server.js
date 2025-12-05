import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/dbConnection.js";
const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB();
app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
