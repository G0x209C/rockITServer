module.exports = {

  attributes:{
    secret: {type:'string',required:false}, /*TODO: CHANGE TO TRUE*/
    name: {type:'string', required:true},
    score: {model:'score'},
    room: {model:'room'},
  }

};
