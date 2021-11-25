import { model, Schema } from "mongoose";

const RoomScheme = new Schema({
  room_id: {
    type: String,
    unique: true,
    required: true,
  },
});

module.exports = model("room", RoomScheme);
