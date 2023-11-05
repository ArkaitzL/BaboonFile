<script setup>
import config from "../config.js"
</script>

<template>
  <nav class="header-bg navbar navbar-expand-lg fixed-top text-uppercase navbar-dark" id="mainNav">
    <div class="container">
      <h1 class="navbar-brand header-txt esp" href="#page-top">{{ config.web.titulo }}</h1>
      <button data-bs-toggle="collapse" data-bs-target="#navbarResponsive" class="navbar-toggler navbar-toggler-right text-uppercase rounded" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse menu" id="navbarResponsive">
       <ul class="navbar-nav ms-auto">
         <li class="nav-item mx-0 mx-lg-1"><a class="py-3 px-0 px-lg-3 rounded header-txt" href="#header">Inicio</a></li>
         <li class="nav-item mx-0 mx-lg-1"><a class="py-3 px-0 px-lg-3 rounded header-txt" href="#proyectos">Proyectos</a></li>
         <!-- <li class="nav-item mx-0 mx-lg-1"><a class="py-3 px-0 px-lg-3 rounded header-txt" href="">About Me</a></li> -->
        </ul>
       </div>
    </div>
  </nav>
</template>

<style>
  nav a{
    text-decoration: none !important;
    transition: .5s !important;
  }
  nav a:hover{
    color: var(--esp) !important;
    transition: .3s !important;
  }
</style>
