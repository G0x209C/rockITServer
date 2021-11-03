

class Client
{
    // TODO: look into using UUID to relink client to socket.
    uuid = "UIXIDAS";
    name = "Player";
    socket; // TODO: implement: on disconnect, needs to be reassigned to new socket;
    is_host = false; // set permissions: will be done on init TODO: implement this.
    room = "AAAAA"; // this will come in very handy, trust me :)
    score = 0;

    constructor(io, socket) {
        //  TODO: generate uuid and send to client;
        //
        this.socket=socket;
    }

    setRoom(room)
    {
        this.room = room;
        // TODO: add aditional checks before adding user to room
        this.socket.join(room);
    }


    sendMessage(msg)
    {

    }

    returnDatamodel()
    {
        return {
            uuid: this.uuid,
            is_host: this.is_host,
            room: this.room,
            score: this.score
        }
    }
}

module.exports = Client;