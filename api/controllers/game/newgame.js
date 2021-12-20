

module.exports = {


  friendlyName: 'Newgame',


  description: 'Create a new game',


  inputs: {
    name:{type:'string',required:true}
  },


  exits: {

  },


  fn: async function (inputs) {

    // generate a room code
    let code = await sails.helpers.genCode(); // get initial code
    while(await Room.count({roomId:code})>0){ // check if DB already has a record: if so, get new code.
      code = await sails.helpers.genCode();
    }
    //await Room.create();
    // create new player in database
    await Player.create({
      name:'henk',
      room:code
    });
    // All done.
    return code;

  }


};
