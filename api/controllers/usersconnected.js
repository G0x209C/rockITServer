module.exports = {


  friendlyName: 'Usersconnected',


  description: 'Usersconnected something.',


  inputs: {
    roomId: {type:'string', required:true}
  },


  exits: {

  },


  fn: async function (inputs,exits,env) {

    let data = await Room.findOne({roomId:inputs.roomId}).populate('players');
    let messages = await Room.findOne({roomId:inputs.roomId}).populate('messages');

    // All done.
    return env.res.json({
      player: data,
      messages: messages,
    });

  }


};
