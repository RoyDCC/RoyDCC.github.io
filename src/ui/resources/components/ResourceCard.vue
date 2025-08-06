<template>
  <div class="glass-border-full rounded-xl bg-soft-blue p-4 py-5 relative flex flex-col gap-3 justify-between">
    <a :href="resource.pageLink" class="block absolute top-4 right-4 w-6 h-6"><img :src="externalLink" alt="Visit" class="w-full" /></a>

    <h1 class="text-white text-xl font-semibold">{{ resource.pageName }}</h1>
    <p class="text-desc">{{ resource.description }}</p>
    <ul class="flex flex-wrap text-sm">
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

<style scoped></style>
