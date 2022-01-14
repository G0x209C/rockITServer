module.exports = {


  friendlyName: 'Leaveroom',


  description: 'Leaveroom sockets.',


  inputs: {
    secret:{type:'string', required:true}
  },


  exits: {

  },


  fn: async function (inputs, exist, env) {
    if(!this.req.isSocket){
      throw {badRequest:'Only sockets can leave a room. The request was probably HTTP-only'};
    }

    let player = await Player.findOne({secret:inputs.secret}).populate('room');
    sails.sockets.leave(env.req, player.room.roomId);
    // All done.
    return env.res.ok('socket left room');

  }


};
