<template>
  <div
    class="p-4 py-5 w-1/4 max-w-[450px] min-w-[280px] 
    glass-border-full rounded-xl bg-soft-blue 
    flex flex-col flex-grow relative gap-3 justify-between"
  >
    <a :href="resource.pageLink" target="_blank" class="external-link w-6 h-6 absolute">
      <img :src="externalLink" alt="Visit" class="w-full" />
    </a>

    <h1 class="text-white text-xl font-semibold">{{ resource.pageName }}</h1>
    <p class="text-desc">{{ resource.description }}</p>
    <ul class="flex flex-wrap text-sm gap-3">
      <li
        v-for="t in resource.tags"
        class="bg-purple text-purple border-purple font-light rounded-full p-1 px-3"
      >
        {{ t }}
      </li>
    </ul>
    <p class="text-desc capitalize">{{ resource.category }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Resource } from "../../../shared/constants/resources";
import externalLink from "/icons/external-link.svg";
const props = defineProps<{ resource: Resource }>();
</script>

<style scoped>
.external-link {
  top: 17px;
  right: 17px;
  transition: 100ms;
  filter: brightness(65%);
}
.external-link:hover {
  top: 14px;
  right: 14px;
  filter: brightness(85%);
}
</style>
