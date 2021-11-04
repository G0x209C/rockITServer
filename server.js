const path = require('path');
const express=require('express');
const app = express();
const http = require('http').createServer(app);
const { Server } = require('socket.io', /*{
    cors:
        {
            origin: "*",
            methods: ["GET", "POST"]
        }
}*/);
const io = new Server(http);

const port = 3000;

const GameClient = require('./app/client');

const history =require('connect-history-api-fallback');

// handlers
const PlayerHandler = require('./SocketHandlers/PlayerHandler');
const ChatHandler = require('./SocketHandlers/ChatHandler');
const GameHandler = require('./SocketHandlers/GameHandler');

// set up static directory
app.use(express.static(path.join(__dirname, './public/')));

// add in the use of history
app.use(history({
    index:'/index.html'
}));

// reassign the static directory: @important this seems to help with Vue-router
app.use(express.static(path.join(__dirname, './public/')));

class Main
{

    static Games = [];
    static GameRooms = []; // TODO: Figure out why you would need two arrays.. :D
    static clients = [];
    static clients_uuid = [];



    // starts server. using port it is possible to run multiple servers on different ports, with shared Game Rooms (static indexes)
    // allows for running multiple server instances to use better thread load balancing: TODO: (Optionally) implement load balancer
    start(port)
    {
        http.listen(port, ()=>
        {
            console.log(`Listening on port: ${port}`);
        });
    }

}

// make instance of server and run it :)
const ServerInstance = new Main();

io.on('connection',socket=>
{
    console.log(`Socket connected: ${socket.id}: ${socket.client}`);

    // first check if client has a previous UUID: TODO: implement on client side
    socket.on('prevConnectionUUID', data=>
    {
        if(data.uuid !== "undefined")
        {
            let index = Main.clients_uuid.indexOf(data.uuid)
            if(index > -1)
            {
                socket.GameClient = Main.clients[index]; // re-assign Gameclient object to socket.
                Main.clients.splice(index,1); // remove from backuplist
                Main.clients_uuid.splice(index,1); // remove from backuplist

            }
        }
    });



    // add client object to socket FIXME: add way to reassign the same object to new socket connection from same client (uuid): checking for existing clients and existing connection.
    socket.GameClient = new GameClient(io,socket);
    socket.emit('initClient', {
        client: socket.GameClient.returnDatamodel() //send over client info
    });

    // call handlers passing in the instance of io;
    ChatHandler(io,socket);
    PlayerHandler(io,socket);
    GameHandler(io,socket);

    socket.on('disconnect',(reason)=>
    {
        //TODO: look into if there's a possibility to send data with a disconnect
        // probably with timer function

        console.log(reason);

        // FIXME: use info from this page: https://stackoverflow.com/questions/28930559/handle-browser-refresh-socket-io
        switch(reason)
        {
            case "transport close":
                Main.clients.push(socket.GameClient);
                Main.clients_uuid.push(socket.GameClient.uuid);
                break;
            case "ping timeout":
                Main.clients.push(socket.GameClient);
                Main.clients_uuid.push(socket.GameClient.uuid);
                break;

            default:

        }
        // save gameclient to clientbackup and store UUID
        Main.clients.push(socket.GameClient);
        Main.clients_uuid.push(socket.GameClient.uuid);
        console.log(`Socket disconnected: ${socket.id} with username: ${socket.client.name}`);
    });
});


ServerInstance.start(port);