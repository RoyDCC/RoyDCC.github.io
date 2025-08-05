<template>
  <section
    class="container-lg text-center glass-border-full rounded-2xl py-15 px-3 flex flex-col gap-5"
  >
    <h1 class="text-3xl font-bold">¿Tienes un proyecto en mente?</h1>
    <p class="text-desc text-lg">
      Transformemos tus ideas en soluciones digitales
    </p>
    
    <router-link to="/contact">
      <button
        class="px-7 py-3 cursor-pointer border-0 bg-cian-gradient text-black rounded-lg font-medium transition duration-250 hover:scale-103"
      >
        Contacto
      </button>
    </router-link>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
