<template>
  <section class="px-4 py-10 mt-15">
    <div class="resources-desc-container">
      <h1 class="text-5xl font-bold text-center">
        Recursos para Desarrolladores
      </h1>
      <p class="text-xl text-desc mt-4 text-center">
        Una colección de herramientas, bibliotecas y recursos útiles para
        desarrolladores
      </p>
    </div>

    <article class="resources-container mt-12">
      <div class="search-wrapper max-w-md m-auto relative">
        <img
          :src="searchSVG"
          alt="Search"
          class="w-7 h-7 object-contain absolute top-0 bottom-0 left-2 m-auto z-1 opacity-65 pointer-events-none"
        />
        <input
          type="search"
          class="search-bar glass-border-full px-4 py-2 pl-11 w-full rounded-lg bg-soft-blue"
          placeholder="Buscar..."
        />
      </div>

      <div
        class="resources-list container-xl flex flex-wrap gap-6 justify-around py-20"
      >
        <ResourceCard v-for="r in resources" :resource="r" />
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { resources } from "../../../shared/constants/resources";
import ResourceCard from "../components/ResourceCard.vue";
import searchSVG from "/icons/search.svg";
</script>

<style scoped>
input:focus {
  outline: 0.1px solid var(--custom-text-cian);
}
</style>
