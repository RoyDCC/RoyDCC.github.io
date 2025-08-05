<template>
  <section class="text-center container-lg px-4 py-10 mt-15">
    <div class="contact-text-container">
      <h1 class="text-4xl text-white font-bold">Contacto</h1>
      <p class="text-desc text-xl mt-3">
        ¿Tienes algún proyecto en mente o quieres colaborar?<br />¡Me encantaría
        escuchar de ti!
      </p>
    </div>
    <div class="contact-cards-container flex flex-row flex-wrap justify-center gap-5 py-10">
      <ContactCard v-for="c in contactOptions" :title="c.title" :description="c.description" :icon="c.icon" :link="c.link" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { contactOptions } from "../../../shared/constants/contact";
import ContactCard from "../components/ContactCard.vue";
</script>

<style scoped></style>
