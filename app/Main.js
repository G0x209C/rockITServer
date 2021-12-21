class Main
{

    static Games = [];
    static GameRooms = []; // TODO: Figure out why you would need two arrays.. :D
    static clients = [];
    static clients_uuid = [];

    constructor(http)
    {
        this.http = http;
    }


    // starts server. using port it is possible to run multiple servers on different ports, with shared Game Rooms (static indexes)
    // allows for running multiple server instances to use better thread load balancing: TODO: (Optionally) implement load balancer
    start(port)
    {
        this.http.listen(port, ()=>
        {
            console.log(`Listening on port: ${port}`);
        });
    }

}

module.exports = Main;