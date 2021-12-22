module.exports = {


  friendlyName: 'Getmessages',


  description: 'Getmessages chat.',


  inputs: {
    roomId: {type:'string', required:true}
  },


  exits: {

  },


  fn: async function (inputs) {

    // get messages associated with player's room.
    let room = await Room.find({roomId:inputs.roomId}).populate('messages');

    // All done.
    return room.messages;

  }


};
