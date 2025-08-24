<template>
  <div class="flex gap-2 flex-wrap justify-center">
    <button
      v-for="filter in filters"
      @click="selectFilter(filter)"
      :key="filter"
      class="filter-chip glass-border-full rounded-4xl px-4 py-0.5 text-desc cursor-pointer capitalize"
      :class="{ 'filter-chip-active': selectedFilter === filter }"
    >
      {{ filter }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{ filters: string[] }>();
const emit = defineEmits(['filter-selected'])

const selectedFilter = ref("");

const selectFilter = (filter: string) => {
  if (selectedFilter.value == filter) {
    selectedFilter.value = "";
  } else {
    selectedFilter.value = filter;
  }
  emit('filter-selected', selectedFilter.value)
};
</script>

<style scoped></style>
