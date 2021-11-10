import { model, Schema } from "mongoose";


const SessionScheme = new Schema({
  id: {
    type: String,
    required: true,
  },
  players: {
    type: Array,
    required: true,
  },
});

module.exports = model("session", SessionScheme);
