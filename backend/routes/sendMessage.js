import express from "express";
import { verifyUser } from "../middleware/Auth.js";
import { sendMessage } from "../controllers/UserMessage.js";
const messageRouter = express.Router();

messageRouter.post("/send", verifyUser, sendMessage);

export default messageRouter;
