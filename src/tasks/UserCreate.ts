import { Task } from "actionhero";
const User = require("../Models/User");

export class UserCreate extends Task {
  constructor() {
    super();
    this.name = "user:create";
    this.description = "Creates a user in the DB";
    this.frequency = 0;
    this.queue = "default";
    this.middleware = [];
    this.inputs = {
      user_id: { required: true },
      name: { required: false },
    };
  }

  async run(data) {
    // your logic here
    let user = User.create({
      user_id: data.params.user_id,
      name: data.params.user_id || "AnonPlayer",
    });
    user.save();
  }
}
