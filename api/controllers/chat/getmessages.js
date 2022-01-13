const async = require('async');
module.exports = {


  friendlyName: 'Getmessages',


  description: 'Getmessages chat.',


  inputs: {
    secret: {type:'string',required:true}
  },


  exits: {},


  fn: async function (inputs, exits, env) {

    if(!env.req.isSocket){
      throw {badRequest: 'Connection is not a socket'};
    }
    // get messages associated with player's room.
    let room = await Player.findOne({secret: inputs.secret}).populate('room').then((player) => {
      return {id:player.room.id,roomId:player.room.roomId}; // get associated room from the requesting player;
    }).catch((err) => {
      console.error(`getmessages: Couldn't find player with UUID ${inputs.secret}`);
      throw err;
    });

    // join socket to listen for new messages in room:
    sails.socket.join(env.req,room.roomId);

    let messages = await Message.find({room: room.id}).populate('utterer')
      .then((messages) => { // FIXME: this probably won't work yet.
        return async.forEach(messages, (message) => {
          message.utterer.secret = undefined;
        });
      })
      .catch((err) => {
        throw err;
      }); // get messages and whoever said the message. TODO: _.omit the secret;


    // All done.
    return env.res.ok(messages);

  }


};
