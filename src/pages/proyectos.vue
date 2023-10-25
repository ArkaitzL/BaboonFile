<script setup>
import config from "../config.js"
import axios from "axios"
</script>

<template>
  <section v-if="repositorios" id="portfolio" class="portfolio">
        <div class="container">
            <h2 class="text-uppercase text-center txt2">PROYECTOS</h2>
            <hr class="star-dark mb-5">
            <div class="row">
              <article v-for="repo in repositorios" :key="repo.id" class="col-md-6 col-lg-4">
                <a class="d-block mx-auto portfolio-item bg1">
                  <h4 class="nombre txt1">{{ repo.name }}</h4>             
                  <!-- <img class="img-fluid" src="/src/assets/fondo.png"> -->
                </a>
              </article>
            </div>
        </div>
    </section>
</template>

<style>
  .portfolio-item {
    height: 25vh;
    padding: 10%;
    text-decoration: none;;

    transform: scale(1);
    transition: transform 0.3s ease-in-out;
  }
  .portfolio-item:hover {
    transform: scale(1.015);
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
  }
</style>

<script>
export default {
  created() {
    this.githubInfo();
  },
  data() {
    return {
      repositorios: null
    };
  },
  methods: {
    async githubInfo() {
      try {
        const repositoriosRequest = await axios.get(`https://api.github.com/users/${config.github.cuenta}/repos`);
        this.repositorios = repositoriosRequest.data.filter(repo => repo.name.toLowerCase() != config.github.cuenta.toLowerCase());

        console.log('Datos de usuario: ', this.repositorios);
      } catch (error) {
        console.error('Error al cargar datos desde la API: ', error);
      }
    },
  }
};
</script>
