<template>
  <article
    class="icon-card cursor-pointer transition duration-200 glass-border-full rounded-xl py-5 px-4 min-w-30 md:py-6 md:px-10 w-1/5 flex-grow"
  >
    <figure>
      <img
        :src="props.icon"
        :alt="props.title"
        class="w-11/12 max-w-15 max-h-15 rounded-lg m-auto drop-light transition duration-200"
      />
      <figcaption
        class="transition duration-200 mt-5 text-desc text-lg text-center"
      >
        {{ props.title }}
      </figcaption>
    </figure>
  </article>
</template>

<script setup lang="ts">
interface CardProps {
  title: string;
  icon: string;
  size?: "small" | "base";
}

const props = withDefaults(defineProps<CardProps>(), {
  size: "base",
});
</script>

<style scoped>
.icon-card:hover {
  border: 0.1px solid var(--custom-glass-border-hover);
}
.icon-card:hover figcaption {
  color: var(--custom-text-primary);
}
.icon-card:hover img {
  transform: scale(1.05);
}
</style>
