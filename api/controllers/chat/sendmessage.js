module.exports = {


  friendlyName: 'Sendmessage',


  description: 'Sendmessage chat.',


  inputs: {
    secret: {type:'string', required:true},
    msg:{type:'string', required:true}
  },


  exits: {

  },


  fn: async function (inputs, exits, env) {

    /**
     *  This method is always a socket function.
     */

    if(!this.req.isSocket){
      throw {badRequest:'Only sockets can send messages to a room. The request was probably HTTP-only'};
    }

    let message = await Message.addMessage(inputs.secret,inputs.msg);

    await sails.sockets.broadcast(message.room.roomId,'newmessage',Message.formatMessageResponse(message), env.req /* exclude the socket who send it */); // FIXME: might create issues
    // All done.
    return;

  }


};
