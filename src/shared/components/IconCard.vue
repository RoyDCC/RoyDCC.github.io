<template>
  <article
    class="icon-card cursor-pointer transition duration-300 glass-border-full rounded-xl flex-grow"
    :class="cardStyle"
  >
    <figure>
      <img
        :src="props.icon"
        :alt="props.title"
        class="rounded-lg m-auto drop-light transition duration-300"
        :class="imgStyle"
      />
      <figcaption
        class="transition duration-300 text-desc text-center"
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
  smallCard?: boolean;
}

const props = withDefaults(defineProps<CardProps>(), {
  smallCard: false,
});


const cardStyle = computed(() =>
  props.smallCard ? "w-25 w-27 py-3 px-2 sm:max-w-30" : "w-1/5 min-w-30 bg-soft py-5 px-4 md:py-6 md:px-10"
);

const imgStyle = computed(() =>
  props.smallCard ? "w-7 h-7" : "max-w-15 max-h-15 w-11/12"
);

const figcaptionStyle = computed(()=>
  props.smallCard ? "mt-2 text-sm" : "mt-5 text-base"
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
  transform: scale(1.1);
}
</style>
