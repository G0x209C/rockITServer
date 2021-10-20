const sockets = require('socket.io');

class session
{
    session_id;
    static numPlayers;
    players = {};
    timeout = 0;

    constructor()
    {
    }

    // add a player of class Player.
    addPlayer(player){
        this.players += player;
    }

}