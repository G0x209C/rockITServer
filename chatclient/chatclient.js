const printMessage = (messageObject)=>{
  $('#chatbox').innerHTML += `<br>${messageObject.utterer.name}: ${messageObject.msg}`;
}
const printOwnMessage = (name,message)=>{
  $('#chatbox').innerHTML += `<br>${name}: ${message}`;
}
