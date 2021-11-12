import { Action,chatRoom } from "actionhero";
const Player = require('../Models/Player');
const Message = require('../Models/Message');

export class SendMessage extends Action {
  constructor() {
    super();
    this.name = "message:send";
    this.description = "Creates message and sends it to room";
    this.outputExample = {};
    this.inputs = {
        name: {required:true},
        message:{required:true},
    };
  }

  async run(data) {
    // your logic here
    let player = Player.find({connectionID:data.params.connectionID });
  }
}
