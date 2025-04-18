// main.js (Vue 3 - Correct way)
import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

const app = createApp(App); // ✅ Store it in a variable

app.config.globalProperties.$axios = axios; // ✅ Now this works

app.mount('#app');
