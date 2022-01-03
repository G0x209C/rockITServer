const {v4} = require('uuid');

module.exports = {


  friendlyName: 'Newgame',


  description: 'Create a new game',


  inputs: {
    name:{type:'string', required:true},
    room:{type:'string', required:false}
  },


  exits: {
    success:{
      responseType: ''
    }
  },


  fn: async function (inputs, exits, env) {

    let player;
    const secret = v4();
    if(inputs.room){
      if(await Room.count({roomId:inputs.room})>0){
        let room = await Room.findOne({roomId:inputs.room});

        // create player joined to room.

        player = await Player.create(
          {
            secret:secret,
            name:inputs.name,
            room: room.id
          }).fetch();
      }
      else
      {
        return 'Room not found';
      }

    }else
    {
      // generate a room code
      let code = await sails.helpers.genCode(); // get initial code
      while(await Room.count({roomId:code})>0){ // check if DB already has a record: if so, get new code.
        code = await sails.helpers.genCode();
      }
      let room = await Room.create({
        roomId: code,
      }).fetch();
      // create new player in database

      player = await Player.create({
        secret:secret,
        name:inputs.name,
        room: room.id
      }).fetch();
    }

    player = JSON.stringify(await Player.findOne({secret:secret}).populate('room'));


    // All done.
    return env.res.ok(player);

  }


};
