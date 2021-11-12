import { model, Schema } from "mongoose";

const playerScheme = new Schema({
  user_id: {
    type: Number,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: false,
    default: 0,
  },
});

module.exports = model("Player", playerScheme);
