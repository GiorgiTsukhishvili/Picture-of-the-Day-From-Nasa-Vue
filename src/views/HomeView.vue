<template>
  <div class="flex flex-col items-center mt-16 gap-10">
    <NasaImage v-for="(image, i) in nasaImages" :key="i" />
  </div>
</template>

<script setup lang="ts">
import { fetchNasaImages } from "@/services";
import { onMounted, ref } from "vue";
import type { NasaImagesTypes } from "@/types";
import { NasaImage } from "@/components";

const nasaImages = ref<NasaImagesTypes[]>([]);

onMounted(() => {
  const images = async () => {
    const data = await fetchNasaImages(10);
    nasaImages.value = data.data;
  };

  images();
});
</script>

<style scoped></style>
