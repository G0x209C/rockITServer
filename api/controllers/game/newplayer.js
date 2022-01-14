
module.exports = {


  friendlyName: 'Newgame',


  description: 'Create a new game',


  inputs: {
    name:{type:'string', required:true},
    room:{type:'string', required:false}
  },


  exits: {
  },


  fn: async function (inputs, exits, env) {
    let playerCreated;
    let room = inputs.room.toUpperCase();
    let error = false;
    if(inputs.room){
      // create new player and try to join him to existing room.
      playerCreated = await Player.createNewPlayer(inputs.name,room).catch((err)=>{
        error = true;
        throw err;
      });
    }else{
      // create new player without room: creates a new room and makes new player host.
      playerCreated = await Player.createNewPlayer(inputs.name).catch((err)=>{
        error = true;
        throw err;
      });
    }
    if(error){
      return env.res.serverError('Could not create new user');
    }
    let player = await Player.findOne({id:playerCreated.id}).populate('room'); // need this to return the full object + room
    // All done.
    return env.res.ok(player);
  }


};
