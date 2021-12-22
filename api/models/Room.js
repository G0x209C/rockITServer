

module.exports = {

  attributes:
    {
      roomId: {type:'string', required:true},

      players:{
        collection:'player',
        via:'room'
      },

      messages:{
        collection: 'message',
        via:'room'
      }
    }

};
