module.exports = {

  attributes:
    {
      roomId: {type: 'string', required: true},

      players: {
        collection: 'player',
        via: 'room'
      },

      messages: {
        collection: 'message',
        via: 'room'
      }
    },

  getPlayers: async (roomId) => { // WIP function. TODO: fill out.
    let {players} = await Room.findOne({roomId: roomId}).populate('players').catch((err) => {
      throw err;
    });
    return players;
  }

};
