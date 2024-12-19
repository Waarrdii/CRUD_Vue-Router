import './bootstrap';
import '../css/app.css';
import '@mdi/font/css/materialdesignicons.min.css';


import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from './axios';

const app = createApp(App);

app.config.globalProperties.$axios = axios;

app.use(router);
app.use(store);
app.mount('#app');
