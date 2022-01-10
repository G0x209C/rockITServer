module.exports = {


  friendlyName: 'Getmessages',


  description: 'Getmessages chat.',


  inputs: {
    secret: {type:'string', required:true}
  },


  exits: {

  },


  fn: async function (inputs,exits,env) {

    // get messages associated with player's room.
    let roomId = await Player.findOne({secret:inputs.secret}).then((player)=>{
      return player.room.roomId;
    }).catch((err)=>{
      console.error(`getmessages: Couldn't find player with UUID ${inputs.secret}`);
      throw err;
    });
    let room = await Room.findOne({roomId:inputs.roomId}).then((room)=>{
      let message = Message.find({room:inputs.roomId}).populate('utterer');
    }).catch((err)=>{
      throw err;
    });

    // All done.
    return env.res.ok(room.messages);

  }


};
