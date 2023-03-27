import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import {setupRouter} from './router'
import './assets/main.css'

const app = createApp(App);
app.use(createPinia());
setupRouter(app);
// app.use(router)

app.mount('#app')
