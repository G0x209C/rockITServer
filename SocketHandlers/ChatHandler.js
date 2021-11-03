/**
 * @author G0x209C
 * @params io, client
 * @description Chat handlers handles chat operations
 *
 * This component acts like a Controller:
 * It is added to the socket connection and handles the correct function calls
 * needed for the socket's event.
 */
module.exports = (io,socket)=>
{
    socket.on('messageSend', data=>
    {
        // emit message to the client's connected room:
        io.to(socket.GameClient.room).emit('chatMessageReceive', {
            name: data.name,
            message: data.message
        });
    });
}