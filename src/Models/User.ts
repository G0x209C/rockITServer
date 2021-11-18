import { model, Schema } from "mongoose";

const UserScheme = new Schema({
  user_id: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
    default: "Anon",
  },
  gameCode: {
    type: String,
    required: true,
  },
});

module.exports = model("user", UserScheme);
