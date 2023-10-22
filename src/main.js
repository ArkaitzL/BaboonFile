import { createApp } from 'vue'
import './main.css'
import inicio from './pages/inicio.vue'
import config from "./config.js"

document.title = config.web.titulo

createApp(inicio).mount('#inicio')
