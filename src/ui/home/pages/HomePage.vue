<template>
  <HeroContainer />
  
  <div class="techstack-container mt-8 py-10 px-4">
    <TechStack />
  </div>

  <div class="cta-container container-lg mb-15 py-12 px-4 drop-light">
    <ContactCTA />
  </div>
</template>

<script setup lang="ts">
import HeroContainer from "../components/HeroContainer.vue";
import TechStack from "../components/TechStack.vue";
import ContactCTA from "../../../shared/components/ContactCTA.vue";
</script>

<style scoped></style>
