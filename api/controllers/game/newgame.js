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
    let score;
    if(inputs.room){
      if(await Room.count({roomId:inputs.room})>0){
        let room = await Room.findOne({roomId:inputs.room});

        // create player joined to room.
        score = await Score.create({}).fetch();

        player = await Player.create(
          {
            secret:secret,
            name:inputs.name,
            score: score.id,
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

      score = await Score.create({}).fetch();

      player = await Player.create({
        secret:secret,
        name:inputs.name,
        score: score.id,
        room: room.id
      }).fetch();
    }

    player = await Player.findOne({secret:secret}).populate('room').populate('score');


    // All done.
    return env.res.ok(player);
  }


};
