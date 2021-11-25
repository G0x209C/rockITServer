<template>
    <div style="display:grid;">
        <div style="">
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div style="">
            <input type="text">
            <button>Send message</button>
        </div>
    </div>
</template>

<script>
// TODO: Make this.
import ActionheroWebsocketClient from '../lib/ActionheroWebsocketClient';

export default{
    props:{
        userID: String,
        name: String,
    },
    mounted(){
        this.client = new ActionheroWebsocketClient(); // @eslint-ignore
    },
    methods:{
        sendMessage(message){
            this.client.say(message);
        }
    }
}
</script>
