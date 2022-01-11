const {v4} = require('uuid');
module.exports = {

  attributes: {
    secret: {type: 'string', required: true},
    name: {type: 'string', required: true},
    isHost: {type: 'boolean', defaultsTo: false},
    score: {type: 'number', defaultsTo: 0},
    room: {model: 'room'},
  },

  createNewPlayer: async function (name, roomId) {
    const secret = v4(); // create a UUID;
    let player; // define function-global-scope variable
    if (roomId) { // here we need to attach a player to a room.
      await Room.findOne({roomId: roomId}).then(async (room) => { // find the room
        player = await Player.create({
          secret: secret,
          name: name,
          room: room.id // associate the id of room to player
        }).fetch().catch((err) => {
          throw err;
        });
      }).catch((err) => {
        throw err;
      });
    } else { // here we need to create new room and make the new player host.
      let code = await sails.helpers.genCode(); // generate a new roomcode
      console.log(code);
      while (await Room.findOne({roomId: code}) > 0) {
        code = await sails.helpers.genCode(); // generate code for each time the code has been found to already exist in database
      }
      let oRoom = await Room.create({
        roomId: code // create room with new code
      }).fetch().catch((err) => {
        throw err;
      });
      // create the player with the association
      player = await Player.create({
        secret: secret,
        name: name,
        isHost: true, // set isHost to true for freshly created owner of the new room
        room: oRoom.id // associate the id of room to player
      }).fetch().catch(async (err) => {
        throw err;
      });

    }
    return player; // return the created player
  }

};
