<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script setup lang="ts">
import Navbar from "./shared/components/Navbar.vue";
import Footer from "./shared/components/Footer.vue";
</script>

<style scoped></style>
