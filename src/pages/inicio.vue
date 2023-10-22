<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import "../styles/inicio.css"
import config from "../config.js"
import axios from "axios"
</script>

<template>
    <section class="perfil-usuario" v-if="usuario">
      <!-- Información personal (derecha) -->
      <article class="info-personal">
        <h1>{{ usuario.name }}</h1>
        <p>{{ usuario.bio }}</p>
        <article class="botones">
          <button>GitHub</button>
          <button>Ver Más</button>
        </article>
      </article>
    
      <!-- Información variada (izquierda) -->
      <article class="info-varia">
        <!-- Compañía -->
        <p><strong>Compañía:</strong> {{ usuario.company }}</p>
        <!-- Ubicación -->
        <p><strong>Ubicación:</strong> {{ usuario.location }}</p>
        <!-- Otras secciones aquí -->
      </article>
    </section>
</template>

<script>
export default {
  created() {
    this.githubInfo();
  },
  data() {
    return {
      usuario: null,
      repositorios: null
    };
  },
  methods: {
    async githubInfo() {
      try {
        const usuarioRequest = await axios.get(`https://api.github.com/users/${config.github.cuenta}`); 
        this.usuario = usuarioRequest.data;

        const repositoriosRequest = await axios.get(`https://api.github.com/users/${config.github.cuenta}/repos`);
        this.repositorios = repositoriosRequest.data;

        console.log(this.usuario);
        console.log(this.repositorios);

      } catch (error) {
        console.error('Error al cargar datos desde la API: ', error);
      }
    },
  },
  computed: {

  },
};
</script>
