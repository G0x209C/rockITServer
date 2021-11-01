/**
 * @author G0x209C
 * @param io
 * @description Chat handlers handles chat operations
 *
 * This component acts like a Controller:
 * It is added to the socket connection and handles the correct function calls
 * needed for the socket's event.
 */
module.exports = (io, client)=>
{
    io.of('/chat').on('connection', socket=>
    {
        client.chatSocket = socket;

    });
}