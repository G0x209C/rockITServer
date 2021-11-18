import { model, Schema } from "mongoose";

const MessageScheme = new Schema({
  user_id: {
    type: String,
    required: true,
  },
  room_id: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = model("message", MessageScheme);
