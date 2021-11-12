import { Action, chatRoom } from "actionhero";
const Player = require("../Models/Player");
const Message = require("../Models/Message");
import { Model } from "mongoose";

export class SendMessage extends Action {
  constructor() {
    super();
    this.name = "message:send";
    this.description = "Creates message and sends it to room";
    this.outputExample = {};
    this.inputs = {
      userID: { required: true },
      message: { required: true },
    };
  }

  async run(data) {
    // your logic here
    let player = Player.find({ name: data.params.userID });

    let message = Message.create(
      {
        room_id: player.room,
        user_id: player.user_id,
        message: data.params.message,
      },
      (err: any) => {
        if (err) throw err;
      }
    );
  }
}

export class GetMessage extends Action {
  constructor() {
    super();
    this.name = "message:get";
    this.description = "Gets current messages and returns them";
    this.outputExample = {};
  }

  async run(data) {
    console.log(data);
  }
}
