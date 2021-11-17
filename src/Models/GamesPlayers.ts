import { model, Schema } from "mongoose";

const GamesPlayers = new Schema({
  room: {
    type: String,
    required: true,
  },
  PlayerId: {
    type: String,
    required: true,
  },
});
