import { model, Schema } from "mongoose";

const GameScheme = new Schema({
  game_id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = model("game", GameScheme);
