<template>
  <article
    class="icon-card cursor-pointer transition duration-200 glass-border-full rounded-xl flex-grow"
    :class="cardStyle"
  >
    <figure>
      <img
        :src="props.icon"
        :alt="props.title"
        class="rounded-lg m-auto drop-light transition duration-200"
        :class="imgStyle"
      />
      <figcaption
        class="transition duration-200 text-desc text-center"
        :class="figcaptionStyle"
      >
        {{ props.title }}
      </figcaption>
    </figure>
  </article>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface CardProps {
  title: string;
  icon: string;
  size?: "small" | "base";
}

const props = withDefaults(defineProps<CardProps>(), {
  size: "base",
});

const isSmall = computed(() => props.size == "small");

const cardStyle = computed(() =>
  isSmall.value ? "w-25 max-w-27 py-3 px-2" : "w-1/5 min-w-30 bg-soft py-5 px-4 md:py-6 md:px-10"
);

const imgStyle = computed(() =>
  isSmall.value ? "w-7 h-7" : "max-w-15 max-h-15 w-11/12"
);

const figcaptionStyle = computed(()=>
  isSmall.value ? "mt-2 text-sm" : "mt-5 text-base"
)
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
