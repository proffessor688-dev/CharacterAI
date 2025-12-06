import express from "express";
import { registerUser,loginUser,getProfile } from "../controllers/User.js";
import { verifyUser } from "../middleware/Auth.js";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/profile", verifyUser, getProfile);
export default userRouter;
