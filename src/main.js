//Import de vue
import { createApp } from 'vue'
//Main css + config
import './main.css'
import config from "./config.js"
//Import de paginas
import header from './pages/header.vue'
import proyectos from './pages/proyectos.vue'
import nav from './pages/nav.vue'
import footer from './pages/footer.vue'
//Aplicacion de paginas
createApp(header).mount('#header')
createApp(proyectos).mount('#proyectos')
createApp(nav).mount('#nav')
createApp(footer).mount('#footer')

//Cambiar titulo de la pagina
document.title = config.web.titulo;

//Cambiar colores de la pagina
const style = document.documentElement.style;

for (const key in config.colores) {
    if (config.colores.hasOwnProperty(key)) {
        style.setProperty(key, config.colores[key]);
    }
}
