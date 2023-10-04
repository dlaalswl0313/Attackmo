import './assets/styleGuide.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {VueSession} from 'vue-session/index'

import App from './App.vue'
import router from './router'

import axios from 'axios'; // Axios를 가져옵니다.
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBO4AWYpbBL-7I8mWm9F4VrP-i0O3D-5y0",
    authDomain: "pjsecond-4e01a.firebaseapp.com",
    projectId: "pjsecond-4e01a",
    storageBucket: "pjsecond-4e01a.appspot.com",
    messagingSenderId: "18653238368",
    appId: "1:18653238368:web:16b5bf548ada141b4f5f05"
};

initializeApp(firebaseConfig);

const app = createApp(App)
var sessionOptions = {
    persist:true,
}

app.use(createPinia())
app.use(router)
app.use(VueSession, sessionOptions)

app.config.globalProperties.axios = axios;

app.mount('#app')
