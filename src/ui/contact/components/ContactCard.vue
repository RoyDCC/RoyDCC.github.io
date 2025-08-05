<template>
  <article
    class="contact-card bg-soft-blue glass-border-full
      flex flex-col flex-1 flex-grow justify-start rounded-xl 
      w-1/3 gap-3 px-3 py-7 min-w-[235px] sm:max-w-[330px]
      transition duration-300"
  >
    <img
      :src="props.icon"
      alt="Icon"
      class="contact-card-img mx-auto w-17 h-17 opacity-85 transition duration-300"
    />
    <h1 class="text-white text-xl font-bold">{{ props.title }}</h1>
    <p class="text-desc">{{ props.description }}</p>
    <a :href="props.link" class="link text-cian opacity-85">Contactar</a>
  </article>
</template>

<script setup lang="ts">
import type { ContactCardProps } from "../../../shared/constants/contact";

const props = defineProps<ContactCardProps>();
</script>

<style scoped>
.contact-card-img {
  filter: brightness(0) saturate(100%) invert(67%) sepia(44%) saturate(2777%)
    hue-rotate(144deg) brightness(106%) contrast(111%);
}
.contact-card:hover {
  border: 0.1px solid var(--custom-glass-border-hover);
}
.contact-card:hover img {
  transform: scale(1.1);
}
</style>
