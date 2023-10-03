import './assets/styleGuide.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {VueSession} from 'vue-session/index'

import App from './App.vue'
import router from './router'

const app = createApp(App)
var sessionOptions = {
    persist:true,
}

app.use(createPinia())
app.use(router)
app.use(VueSession, sessionOptions)

app.mount('#app')
