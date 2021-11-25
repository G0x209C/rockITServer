import {Action, api, chatRoom} from "actionhero";

export class GameStart extends Action {
  constructor() {
    super();
    this.name = "game:start";
    this.description = "Creates a game and sends info to player";
    this.outputExample = {};
    this.inputs = {
      gamecode:{
        required:false
      },
      name:{
        required:true
      }
    };
  }

  async run(data) {
    // your logic here
    let errors=[];
    if(data.params.gamecode){
      if(await chatRoom.exists(data.params.gamecode)){
        chatRoom.addMember(data.connection.id, data.params.gamecode).then()
            .catch((e)=>{
              throw new Error(e);
            });
      }else{

      }
    }else{
      chatRoom.add(data.params.gamecode)
          .then()
          .catch((e)=>{
            data.response.ok=false;
            errors.push(e);
            throw new Error(e);
          });
      chatRoom.addMember(data.id, data.params.gamecode).then()
          .catch((e)=>{
            data.response.ok=false;
            errors.push(e)
            throw new Error(e);
          });
    }

    if(errors.length>0){
      data.response.error=errors;
    }

  }
}
