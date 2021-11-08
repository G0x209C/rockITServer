import { Action, api, chatRoom, task } from "actionhero";
const player = require("../Models/Player");
const message = require("../Models/Message");

export class StartGame extends Action {
  constructor() {
    super();
    this.name = "game:start";
    this.description = "Starting a game";
    this.outputExample = {};
    this.inputs = {
      connectionID: { required: true },
      name: { required: true },
      room: { required: false },
    };
  }

  async createPlayer(connectionID, name, room) {
    let Player = new player({
      connectionID: connectionID,
      name: name,
      room: room,
    });
    Player.save();
  }

  async createOrJoinGame(connectionID, room) {
    if (room) {
      if (!(await chatRoom.exists(room))) {
        try {
          await task.enqueue("createChatRoom", { name: room });
          await chatRoom.addMember(connectionID, room);
        } catch (err) {
          api.log("error", err.message);
        }
      } else {
        try {
          await chatRoom.addMember(connectionID, room);
        } catch (err) {
          api.log("error", err.message);
        }
      }
    }
  }

  async run(data) {
    // your logic here
    let { name, room, connectionID } = data.params;
    try {
      await this.createOrJoinGame(connectionID, room);
      await this.createPlayer(connectionID, name, room);
      data.response.ok = true;
    } catch (err) {
      data.response.ok = false;
      data.response.errMessage = err.message;
    }
  }
}

export class SelectGame extends Action {
  constructor() {
    super();
    this.name = "game:select";
    this.description = "Selecting a game";
    this.outputExample = {};
    this.inputs = {
      connectionID: { required: true },
      game: { required: true },
    };
  }

  async run(data) {}
}
