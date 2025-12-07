import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Conversation",
      required: true,
    },

    senderType: {
      type: String,
      enum: ["user", "character"],
      required: true,
    },

    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "senderType", 
      required: true,
    },

    message: {
      type: String,
      required: true,
    },

    media: {
      type: String, // could be an image/audio/video URL
      required: false,
    },

    isEdited: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
export default Message;
