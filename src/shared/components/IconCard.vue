<template>
  <article class="icon-card flex flex-col">
    <figure>
        <img :src="props.icon" :alt="props.title" class="w-12 h-12">
        <figcaption>{{ props.title }}</figcaption>
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

<style scoped></style>
