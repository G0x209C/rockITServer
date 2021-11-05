import { Task, chatRoom } from "actionhero";

export class checkGameExists extends Task {
  constructor() {
    super();
    this.name = "checkGameExists";
    this.description = "an actionhero task";
    this.frequency = 0;
    this.queue = "default";
    this.middleware = [];
  }

  async run(data) {
    if (chatRoom.exists(data.room)) {
      data.response.ok = true;
    }
    data.response.ok = false;
  }
}
