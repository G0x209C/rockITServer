
module.exports = (io,socket)=>
{
    socket.on('yay',(data)=>{
        console.log(`This works now! ${data}`);
    });
}