<script setup>
import config from "../config.js"
import axios from "axios"
</script>

<template>
 <header v-if="usuario" class="text-center text-white bg-primary masthead">
        <div class="container">
            <img class="img-fluid d-block mx-auto mb-5 rounded-circle w-25" :src="usuario.avatar_url">
            <a :href="usuario.html_url" target="_blank">
              <h1 v-if="usuario.name">{{ usuario.name }}</h1>
              <h1 v-else>Sin nombre</h1>
            </a>
            <hr class="star-light">
            <h2 v-if="usuario.name" class="font-weight-light mb-0">{{ usuario.bio }}</h2>
            <h2 v-else class="font-weight-light mb-0">--</h2>
        </div>
    </header>
</template>

<style>
header{
  height: 100vh;
}
header a {
  text-decoration: none !important;
  color: white !important;
}
header a:hover {
  text-decoration: none !important;
  color: white !important;
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
