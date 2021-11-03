/**
 * @author G0x209C
 * @params io, client
 * @description Player handler that handles player operations
 *
 * This component acts like a Controller:
 * It is added to the socket connection and handles the correct function calls
 * needed for the socket's event.
 */
module.exports = (io,socket)=>
{
    socket.on('yay',(data)=>{
        console.log(`This works now! ${data}`);
    });
}