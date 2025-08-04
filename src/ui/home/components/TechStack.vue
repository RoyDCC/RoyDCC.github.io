<template>
  <section class="container-lg">
    <h1 class="text-white text-3xl font-bold text-center mb-10">
      Herramientas Principales
    </h1>

    <div class="cards-container flex flex-wrap justify-center gap-5">
        <IconCard v-for="tech in technologies.filter(item=> item.active&&item.main)" :title="tech.name" :icon="tech.icon"/>
    </div>
</section>
</template>

<script setup lang="ts">
import IconCard from "../../../shared/components/IconCard.vue";
import { technologies } from "../../../shared/constants/technology-stack";
</script>

<style scoped></style>
