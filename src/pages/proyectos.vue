<script setup>
import config from "../config.js"
import axios from "axios"
</script>

<template>
  <section v-if="repositorios" id="portfolio" class="portfolio">
        <div class="container">
            <h2 class="text-uppercase text-center text-secondary">PROYECTOS</h2>
            <hr class="star-dark mb-5">
            <div class="row">
              <article v-for="repo in repositorios" :key="repo.id" class="col-md-6 col-lg-4">
                <a class="d-block mx-auto portfolio-item">
                  <!-- Hover -->
                  <!-- <div class="d-flex portfolio-item-caption position-absolute h-100 w-100 bg-none">
                    <div class="text-center text-white my-auto portfolio-item-caption-content w-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>                    </div>
                  </div>        -->
                  <h4 class="nombre">{{ repo.name }}</h4>             
                  <img class="img-fluid" src="/src/assets/fondo.png">
                </a>
              </article>
            </div>
        </div>
    </section>
</template>

<style>
  .nombre {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
  }

  .portfolio-item {
    opacity: 1;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }
  .portfolio-item:hover {
    opacity: 0.75;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
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
