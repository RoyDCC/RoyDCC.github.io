<template>
  <section class="container-lg">
    <div class="main-tech">
      <h1 class="text-white text-3xl font-bold text-center mb-10">
        Herramientas Principales
      </h1>

      <div class="cards-container flex flex-wrap justify-center gap-5">
        <IconCard
          v-for="tech in mainTechnologies"
          :title="tech.name"
          :icon="tech.icon"
          :key="tech.name"
        />
      </div>
    </div>

    <div class="other-tech mt-12 pt-5 glass-border-t">
      <h1 class="text-desc-regular text-2xl text-center mb-6">
        Otras tecnologías
      </h1>

      <div class="cards-container flex flex-wrap justify-center gap-5">
        <IconCard
          v-for="tech in otherTechnologies"
          :title="tech.name"
          :icon="tech.icon"
          :key="tech.name"
          size="small"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import IconCard from "../../../shared/components/IconCard.vue";
import { technologies } from "../../../shared/constants/technology-stack";

const mainTechnologies = technologies.filter((item) => item.active && item.main)
const otherTechnologies = technologies.filter((item) => item.active && !item.main)
</script>

<style scoped></style>
