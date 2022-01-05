const uuid = require('uuid');

module.exports = {


  friendlyName: 'Getscore',


  description: 'Getscore game.',


  inputs: {
      secret:{type:'string', required:true}
  },


  exits: {

  },


  fn: async function (inputs,exits,env) {
    let player;
    let result;
    if(inputs.secret.length > 0){
      if(uuid.validate(inputs.secret)){
        player = await Player.findOne({secret:inputs.secret}).populate('room');
      }
    }

    if(!player){
      return env.res.serverError('No player found or invalid UUID');
    }else {
      // All done.
      /*
      *   What do we need to do?
      *   First off: populate room.
      **/
      let roomPlayers = await Room.findOne({roomId: player.room.roomId}).populateAll()
        .then((room)=>{
          let players = Player.find({room:room.id}).populate('score').then((players)=>{return players;});
          return [room, players];
        })
        .spread((room, players)=>{
          room.players = players;
          result=room;
        }).catch(err=>{if(err){return env.res.serverError(err);}});


      return env.res.ok(result);

    }

  }


};
