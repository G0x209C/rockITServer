import { Action, task, api, chatRoom } from "actionhero";

export class startGame extends Action {
  constructor() {
    super();
    this.name = "startGame";
    this.description = "starts or joins a game";
    this.outputExample = {};
    this.inputs = {
      connectionID: { required: true },
      name: { required: true },
      room: { required: false },
    };
  }

  async createOrJoinGame(connectionID, room) {
    if (room) {
      const roomExists = await task.enqueue("checkGameExists", {
        room: room,
      });
      if (roomExists) {
        try {
          await chatRoom.addMember(connectionID, room);
        } catch (err) {
          api.log("error", err.message);
        }
      } else {
        try {
          await task.enqueue("createChatRoom", { name: room });
          await chatRoom.addMember(connectionID, room);
        } catch (err) {
          api.log("error", err.message);
        }
      }
    }
  }

  async run(data) {
    // your logic here
    let { room, connectionID } = data.params;
    try {
      await this.createOrJoinGame(connectionID, room);
      data.response.ok = true;
    } catch (err) {
      data.response.ok = false;
      data.response.errMessage = err.message;
    }
  }
}
