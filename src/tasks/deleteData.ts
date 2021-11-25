import { Task, log } from "actionhero";
const User = require("../Models/User");
const Message = require("../Models/Message");
const Room = require("../Models/Room");

export class DeleteData extends Task {
  constructor() {
    super();
    this.name = "deleteData";
    this.description = "an actionhero task";
    this.frequency = 0;
    this.queue = "deletes";
    this.middleware = [];
    this.inputs = {
      room_id: { required: true },
    };
  }

  async run(data) {
    // your logic here
    try {
      let room = await Room.findOne(data.params.room_id);
      if (room) {
        await User.deleteMany({ room_id: data.params.room_id });
        await Message.deleteMany({ room_id: data.params.room_id });
        await Room.delete({ room_id: data.params.room_id });
      } else {
        throw Error;
      }
    } catch (e) {
      log(`An error occured whilst deleting data: ${e.error}`, "error");
      throw new Error(e);
    }
  }
}
