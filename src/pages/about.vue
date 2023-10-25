<script setup>
import config from "../config.js"
import axios from "axios"
</script>

<template>
 <section id="about">

 </section>
</template>

<style>
  #about{
    min-height: 92.5vh;
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
    
    }
  }
};
</script>
