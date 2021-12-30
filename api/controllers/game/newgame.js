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

    if(inputs.room){
      if(await Room.count({roomId:inputs.room})>0){
        let room = await Room.findOne({roomId:inputs.room});

        // create player joined to room.

        player = await Player.create(
          {
            secret:v4(),
            name:inputs.name,
            room: room.id
          });
      }
      else
      {
        return 'Room not found';
      }

      users = await Room.findOne({roomId:inputs.room}).populate('players');
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
      console.log(env.req.session.sid);
      player = await Player.create({
        secret:v4(),
        name:inputs.name,
        room: room.id
      }).fetch();
    }



    // All done.
    return env.res.json(player);

  }


};
