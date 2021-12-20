

module.exports = {

  attributes:
    {
      roomId: {type:'string', required:true},
      userCount: {type:'number', defaultsTo:0},

      players:{
        collection:'player',
        via:'room'
      }
    }

};
