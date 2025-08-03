<template>
    <section class="container-lg">
        <h1 class="text-white text-3xl font-bold text-center">Herramientas Principales</h1>
        <IconCard :title="technologies[0].name" :icon="technologies[0].icon" />
    </section>
</template>

<script setup lang="ts">
import IconCard from '../../../shared/components/IconCard.vue';
import { technologies } from '../../../shared/constants/technology-stack';
</script>

<style scoped>

</style>