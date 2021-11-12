import { model, Schema } from "mongoose";

const MessageScheme = new Schema({
  room_id: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = model("message", MessageScheme);
