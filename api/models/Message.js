module.exports = {

  attributes:{
    room: {model:'room'},
    utterer: {model:'player'},
    msg: {type:'string', required:true}
  },

  addMessage:async (secret, msg)=>{
    if(!secret||!msg){
      throw error('Didn\'t get the required inputs');
    }
    let player = await Player.findOne({secret:secret}).populate('room').catch(err=>{throw err;});
    let message = await Message.create({
      room:player.room.id,
      utterer:player.id,
      msg:msg
    }).fetch().populateAll().catch(err=>{throw err;}); // TODO: test this for errors;
    return message;
  },
  formatMessageResponse: async (messageObject)=>{
    return {
      utterer: _.omit(messageObject.utterer, ['secret','score','id','room']), // remove sensitive and unnecessary information
      msg: messageObject.msg
    };
  }
}
;
