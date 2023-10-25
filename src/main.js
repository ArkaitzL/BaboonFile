import { createApp } from 'vue'

import './main.css'
import config from "./config.js"

import header from './pages/header.vue'
import proyectos from './pages/proyectos.vue'
import nav from './pages/nav.vue'
import footer from './pages/footer.vue'


createApp(header).mount('#header')
createApp(proyectos).mount('#proyectos')
createApp(nav).mount('#nav')
createApp(footer).mount('#footer')

const style = document.documentElement.style;

style.setProperty('--bg1', config.colores['--bg1'])
style.setProperty('--txt1', config.colores['--txt1'])
style.setProperty('--bg2', config.colores['--bg2'])
style.setProperty('--txt2', config.colores['--txt2'])
style.setProperty('--header-bg', config.colores['--header-bg'])
style.setProperty('--header-txt', config.colores['--header-txt'])
style.setProperty('--select-bg', config.colores['--select-bg'])
style.setProperty('--select-txt', config.colores['--select-txt'])