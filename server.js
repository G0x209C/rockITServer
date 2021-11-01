const express=require('express');
const app = express();
const http = require('http').createServer(app);
const { Server } = require('socket.io');
const io = new Server(http);
const path = require('path');
const port = 3000;
const GameClient = require('./app/client');

// handlers
const PlayerHandler = require('./SocketHandlers/PlayerHandler');
const ChatHandler = require('./SocketHandlers/ChatHandler');

app.use(express.static(path.join(__dirname, './public/')));


class Main
{
    static clients = [];

    registerHandlers(socket)
    {
        ChatHandler(io);
        PlayerHandler(io,socket);
    }


    start()
    {
        http.listen(port, ()=>
        {
            console.log(`Listening on port: ${port}`);
        });
    }

}

const ServerInstance = new Main();

io.on('connection',socket=>
{
    console.log(`Socket connected: ${socket.id}`);

    socket.clientInstance = new GameClient();

    // call handlers passing in the instance of io;
    ServerInstance.registerHandlers(socket);

    socket.on('disconnect',()=>
    {
        console.log(`Socket disconnected: ${socket.id}`);
    });


});


ServerInstance.start();