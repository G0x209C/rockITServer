import { model, Schema } from "mongoose";

const AnswerScheme = new Schema({
  game_id: {
    type: Number,
    required: true,
  },
  player_id: {
    type: String,
    required: true,
  },
  Answer: {
    type: String,
    required: true,
  },
});

module.exports = model("answer", AnswerScheme);
