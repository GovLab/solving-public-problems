import { createApp } from 'vue'
import './assets/styles.css'
import App from './App.vue'
import router from './router'
import VueGtag from "vue-gtag"
import Tweet from 'vue-tweet'

createApp(App).use(
    router,
    VueGtag, {
  config: { id: "G-LS299J2EWH" },
  enabled: true, 
}, Tweet).mount('#app')