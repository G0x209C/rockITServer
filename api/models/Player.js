module.exports = {

  attributes:{
    name: {type:'string', required:true},
    points: {type:'number', defaultsTo:0},
    room: {model:'room'},
  }

};
