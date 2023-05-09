<template>
  <RouterLink
    v-for="(image, i) in currentImages"
    :to="{ name: 'nasa_image', params: { title: image.title } }"
    class="hover:scale-105 duration-200 max-w-[330px] w-full shadow-3xl p-3"
  >
    <img
      :key="i"
      :src="image.url"
      alt="nasa-image"
      class="rounded-md h-[220px] w-full object-cover"
    />
    <h1 class="text-center pt-4 pb-6 min-h-[100px] text-lg font-medium">
      {{ image.title }}
    </h1>
  </RouterLink>
</template>

<script setup lang="ts">
import type { NasaImagesTypes } from "@/types";

defineProps<{ currentImages: NasaImagesTypes[] }>();
</script>
