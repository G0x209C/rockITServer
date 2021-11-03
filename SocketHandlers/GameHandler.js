/**
 * @author G0x209C
 * @params io, client
 * @description Game handler handles game CRUD operations
 *
 * This component acts like a Controller:
 * It is added to the socket connection and handles the correct function calls
 * needed for the socket's event.
 */

module.exports = (io,socket)=>
{
    socket.on('gameJoin', data=>{
        // TODO: add join room functionality
        try{
            socket.join(data.room)
            socket.GameClient.room = data.room;
            socket.emit('gameJoinSuccess',{
                client: socket.GameClient, //TODO: add player info and stuff.
            });
        }
        catch(err)
        {
            console.log(`A terrible error happened in joining the room ${data.room} for socket ${socket.id}`);
        }


    });
}