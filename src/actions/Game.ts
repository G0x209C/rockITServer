import { Action, api, chatRoom, task } from "actionhero";
import {mongo} from "mongoose";
const Player = require("../Models/Player");
const message = require("../Models/Message");

export class StartGame extends Action {
  constructor() {
    super();
    this.name = "game:start";
    this.description = "Starting a game";
    this.outputExample = {};
    this.inputs = {
      player_id: { required: true },
      name: { required: true },
      room: { required: false },
    };
  }

  async createPlayer(playerID, name, room) {
    let player = new Player({
      player_id: playerID,
      name: name,
      room: room,
    });
    Player.save();
    return {
      player:Player.find({player_id:playerID}).lean().exec((err,arr)=>
      {
        if(err) throw err;
        return arr;
      })
    };
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
      await this.createOrJoinGame(connectionID, room); // await the creation of a room
      let p = await this.createPlayer(connectionID, name, room); // create user and return it to client
      data.response.ok = true;
      return {player:p.player}
    } catch (err) {
      data.response.ok = false;
      data.response.errMessage = err.message;
      return {
        player:null
      }
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

  async run(data) {
    let player = Player.find({connectionID:data.params.connectionID})
    if(Player.find().lean()){}
    data.response.ok=true;
  }
}
