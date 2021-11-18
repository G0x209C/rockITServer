import { Task, log } from "actionhero";
const User = require("../Models/User");
const Message = require("../Models/Message");

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
      await User.deleteMany({ room_id: data.params.room_id });
      await Message.deleteMany({ room_id: data.params.room_id });
    } catch (e) {
      log(`An error occured whilst deleting data: ${e.error}`, "error");
      throw new Error(e);
    }
  }
}
