module.exports = {

  attributes:{
    secret: {type:'string',required:false}, /*TODO: CHANGE TO TRUE*/
    name: {type:'string', required:true},
    points: {type:'number', defaultsTo:0},
    room: {model:'room'},
  }

};
