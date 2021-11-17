import { Action, chatRoom } from "actionhero";
const Player = require("../Models/Player");
const Message = require("../Models/Message");


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
    this.inputs={
       userID:{required:true},
    }
  }

  async run(data) {
    console.log(data);
    try{
      let playerRoom = await Player.find({ user_id:data.params.userID }).select('room');
      let messages= await Message.find({room_id:playerRoom});
      return {
        success:true,
        messages: messages,
        error:null,
      }
    }catch(e){
      return{success:false,
        messages:null,
        error:e.error
      }
    }

  }
}
