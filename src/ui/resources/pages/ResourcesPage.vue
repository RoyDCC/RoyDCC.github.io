<template>
  <section class="px-4 py-10 mt-15">
    <div class="resources-desc-container">
      <h1 class="text-5xl font-bold text-center">
        Recursos para Desarrolladores
      </h1>
      <p class="text-xl text-desc mt-4 text-center">
        Una colección de herramientas, bibliotecas y recursos útiles para
        desarrolladores
      </p>
    </div>

    <article class="resources-container mt-12">
      <div class="search-wrapper max-w-md m-auto relative">
        <img
          :src="searchSVG"
          alt="Search"
          class="w-7 h-7 object-contain absolute top-0 bottom-0 left-2 m-auto z-1 opacity-65 pointer-events-none"
        />
        <input
          v-model="filterSearch"
          type="search"
          class="search-bar glass-border-full px-4 py-2 pl-11 w-full rounded-lg bg-soft-blue"
          placeholder="Buscar..."
        />
      </div>

      <div class="filters-container container-xl mt-8">
        <CategoryFilters
          :filters="filterList"
          @filter-selected="selectedCategory = $event"
        />
      </div>

      <div
        class="resources-list container-xl flex flex-wrap gap-6 justify-around py-15 pt-10"
      >
        <ResourceCard
          v-for="r in filteredResources"
          :resource="limitedTags(r)"
        />
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { resources } from "../../../shared/constants/resources";
import ResourceCard from "../components/ResourceCard.vue";
import CategoryFilters from "../components/CategoryFilters.vue";
import searchSVG from "/icons/search.svg";
import type { Resource } from "../../../shared/interfaces/resource.interface";
import { categories } from "../../../shared/interfaces/resource.interface";

// Filters
const selectedCategory = ref("");

// Searchbar
const filterList = Object.values(categories);
const filterSearch = ref("");

const filteredResources = computed(() => {
  const searchTerm = filterSearch.value.toLowerCase();

  return resources.filter(
    (r) =>
      (selectedCategory.value == "" || r.category.toLowerCase() == selectedCategory.value.toLowerCase()) &&
      (r.pageName.toLowerCase().includes(searchTerm) ||
        r.category.toLowerCase().includes(searchTerm) ||
        r.tags.some((tag) => tag.toLowerCase().includes(searchTerm)))
  );
});

// Tags
const limitedTags = (r: Resource): Resource => ({
  ...r,
  tags: r.tags.slice(0, 3),
});
</script>

<style scoped>
input:focus {
  outline: 0.1px solid var(--custom-text-cian);
}
</style>
