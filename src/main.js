import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { io } from 'socket.io-client';
import VueSocketIOExt from "vue-socket.io-extended";

const socket = io('http://localhost:3000');

createApp(App).use(store).use(VueSocketIOExt, socket)
    .use(router).mount('#app');
