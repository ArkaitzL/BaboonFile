<script setup>
import config from "../config.js"
import axios from "axios"
</script>

<template>
 <header class="text-center text-white bg-primary masthead">
        <div class="container"><img class="img-fluid d-block mx-auto mb-5" src="/src/assets/img/profile.png">
            <h1>John Doe</h1>
            <hr class="star-light">
            <h2 class="font-weight-light mb-0">Web Developer - Graphic Artist - User Experience Designer</h2><button class="btn btn-primary" type="button" style="margin-top: 27px;">GITHUB</button>
        </div>
    </header>
</template>

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
      } catch (error) {
        console.error('Error al cargar datos desde la API: ', error);
      }
    },
  }
};
</script>
