import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Tabs from 'vue3-tabs';

createApp(App).use(router).use(Tabs).mount('#app')
