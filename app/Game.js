
class Game
{
    gameID; // this is room ID;
    clients = [];
    clients_uuid = [];


    registerUser(socket, uuid)
    {
        //TODO: implement feature to check if user is already registered:
        // if so: socket must be linked to existing user. :)
        if(this.clients.indexOf(uuid))
        {
            socket.client = this.clients.indexOf(uuid);
        }
    }

    constructor()
    {

    }


}

module.exports = Game;