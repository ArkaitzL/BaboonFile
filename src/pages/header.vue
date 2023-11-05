<script setup>
import config from "../config.js"
import axios from "axios"
</script>

<template>
 <header v-if="usuario" class="text-center text-white masthead">
        <div class="container">
            <img class="img-fluid d-block mx-auto mb-5 rounded-circle w-25" :src="usuario.avatar_url">
            <h1 v-if="usuario.name" id="titulo" class="txt1 d-flex align-items-center justify-content-center">
              Hola soy&nbsp;<a class="hover-line esp" :href="usuario.html_url" target="_blank">{{ usuario.name }}</a>
            </h1>
            <h1 v-else class="txt1">Sin nombre</h1>
            <hr class="star-light">
            <h2 v-if="usuario.name" class="font-weight-light mb-0 txt1">{{ usuario.bio }}</h2>
            <h2 v-else class="font-weight-light mb-0 txt1">--</h2>
        </div>
    </header>
</template>

<style>
img{
  min-height: 125px;
  min-width: 125px;
}
header{
  min-height: 100vh;
}
header a {
  text-decoration: none !important;
  color:  var(--txt1) !important;
}
.hover-line {
    position: relative;
    display: inline-block;
    padding: 0.2em 0;
    text-decoration: none;
    color: inherit;
    overflow: hidden;
}
  
.hover-line::before, .hover-line::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 50%;
    height: 0.05em;
    background-color: var(--txt1);
    transition: width 300ms ease, transform 300ms ease;
}
  
.hover-line::before {
    left: 0;
    transform: scaleX(0);
    transform-origin: right;
}
  
.hover-line::after {
    right: 0;
    transform: scaleX(0);
    transform-origin: left;
}
  
.hover-line:hover::before,
.hover-line:focus::before,
.hover-line:hover::after,
.hover-line:focus::after {
    width: 100%;
    transform: scaleX(1);
}

@media only screen and (max-width: 600px) {
  #titulo{
    font-size: 10vw !important;
    flex-direction: column;
  }
}

</style>

<script>
export default {
  created() {
    this.githubInfo();
  },
  data() {
    return {
      usuario: null,
    };
  },
  methods: {
    async githubInfo() {
      try {
        const usuarioRequest = await axios.get(`https://api.github.com/users/${config.github.cuenta}`); 
        this.usuario = usuarioRequest.data;

        console.log('Datos de usuario: ', this.usuario);
      } catch (error) {
        console.error('Error al cargar datos desde la API: ', error);
      }
    }
  }
};
</script>
