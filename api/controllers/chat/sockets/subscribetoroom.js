module.exports = {


  friendlyName: 'Subscribetoroom',


  description: 'Subscribetoroom sockets.',


  inputs: {
    secret: {type:'string',required:true}
  },


  exits: {

  },


  fn: async function (inputs, exits, env) {

    if(!this.req.isSocket){
      throw {badRequest:'Only sockets can subscribe to a room. The request was probably HTTP-only'};
    }
    let player = await Player.findOne({secret:inputs.secret}).populate('room'); // get room associated to user
    //let messages = await Message.find({room:"henk"});

    //let connRoom = await Room.subscribe(env.req, _.pluck(room,'id')); // subscribe user to Room;

    // this should subscribe the user to the right room.
    sails.sockets.join(env.req, player.room.roomId);
    return env.res.ok(player);

  }


};
