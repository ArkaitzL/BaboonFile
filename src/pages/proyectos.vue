<script setup>
import config from "../config.js"
import axios from "axios"
import Swal from 'sweetalert2'
</script>

<template>
  <section v-if="repositorios" id="portfolio" class="portfolio">
        <div class="container">
            <h2 class="text-uppercase text-center txt2">PROYECTOS</h2>
            <hr class="star-dark mb-5">
            <div class="row">
              <article v-for="repo in repositorios" :key="repo.id" class="col-md-6 col-lg-4">
                <div @click="infoRepo(repo)" class="d-block mx-auto portfolio-item bg1">
                  <h4 class="nombre txt1">{{ repo.name }}</h4>             
                </div>
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
    infoRepo(repo) {
      const style = getComputedStyle(document.documentElement);

      Swal.fire({
        html: `
        <div class="repo-info">
          <h1 class="repo-name">${repo.name}</h1>
          <hr class="star-dark">
          <div class="repo-description">
            ${repo.description 
              ? repo.language
                ? `${repo.description } Este repositorio ha sido creado con <spam class="link"> ${repo.language} </spam>.` 
                : repo.description
              : 'No hay descripción disponible.'}
          </div>
          <br>
          <br>
          <div class="repo-details">
            <div class="repo-detail">
              <p><strong>Fecha creacion:</strong> ${new Date(repo.created_at).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
        `,
        footer: `<a href="${repo.html_url}" class="link" target="_blank">Ver el proyecto</a>`,
        width: 600,
        padding: '3em',
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonColor: style.getPropertyValue('--bg1'), 
        cancelButtonText: 'Salir',
        cancelButtonPosition: 'top-end',
        color: style.getPropertyValue('--txt2'), 
        background: style.getPropertyValue('--bg2') 
      })
    }
  }
};
</script>
