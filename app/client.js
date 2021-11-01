

class Client
{
    // TODO: look into using UUID to relink client to socket.
    uuid;
    socket; // TODO: implement: on disconnect, needs to be reassigned to new socket;
    room; // this will come in very handy, trust me :)
    player;

    setRoom(room)
    {

    }

    constructor(socket) {
        //  TODO: generate uuid and send to client;
        //
        this.socket=socket;
    }

    sendMessage(msg)
    {

    }
}

module.exports = Client;