import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/dbConnection.js";
import userRouter from "./routes/User.js";
import characterRouter from "./routes/Character.js";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/users", userRouter);
app.use("/api/character", characterRouter);
app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
