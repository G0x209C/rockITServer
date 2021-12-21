

module.exports = {

  attributes:
    {
      roomId: {type:'string', required:true},

      players:{
        collection:'player',
        via:'room'
      }
    }

};
