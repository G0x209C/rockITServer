import {useState, useEffect} from "react";

export const useChatService = (userId, messageCallback, {room}) => {
    if (!globalThis.ActionheroWebsocketClient) return null;
    const [client] = useState(new globalThis.ActionheroWebsocketClient());
    const [enabled, setEnabled] = useState(true);

    useEffect(() => {
        if (userId) connect();

        return () => {
            if (userId) setEnabled(false);
            if (userId) disconnect();
        };
    }, [userId]);

    const connect = async () => {
        if (client.state === "connected") {
            return;
        }
        client.on("connected", function () {
            console.log("[websocket] connected");
        });
        client.on("disconnected", function () {
            console.log("[websocket] disconnected");
        });
        client.on("error", function (error) {
            console.log("[websocket] error", error.stack);
        });
        client.on("reconnect", function () {
            console.log("[websocket] reconnect");
        });
        client.on("reconnecting", function () {
            console.log("[websocket] reconnecting");
        });
        client.on("message", function (message) {
            if (message.error) {
                console.error("[websocket] - error", message);
            }
        });
        client.on("alert", function (message) {
            alert("[websocket] " + JSON.stringify(message));
        });
        client.on("api", function (message) {
            alert("[websocket] " + JSON.stringify(message));
        });
        client.on(
            "say",
            function ({context, from, room: messageRoom, sentAt, message}) {
                if(room) {
                    if (messageRoom === `${room}` && enabled)
                        messageCallback(message);
                }else{
                    if(enabled){
                        messageCallback(message);
                    }
                }
            }
        );

        client.connect(function (error, details) {
            if (error) {
                console.error(error);
            } else {
                if(room){client.roomAdd(`${room}`);}
                else{
                    client.roomAdd('defaultRoom');
                }
            }
        });

    }


    async function disconnect() {
        client.disconnect();
    }
}