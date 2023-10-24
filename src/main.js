import { createApp } from 'vue'

import './main.css'
import config from "./config.js"

import nav from './pages/nav.vue'
import header from './pages/header.vue'
import proyectos from './pages/proyectos.vue'
import footer from './pages/footer.vue'

createApp(header).mount('#header')
createApp(proyectos).mount('#proyectos')
createApp(nav).mount('#nav')
createApp(footer).mount('#footer')

document.title = config.web.titulo