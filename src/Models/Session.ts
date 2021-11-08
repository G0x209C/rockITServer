import { model, Schema } from "mongoose";

const SessionScheme = new Schema({
  id: {
    type: String,
    required: true,
  },
  player_id: {
    type: String,
    required: true,
  },
});

module.exports = model("session", SessionScheme);
