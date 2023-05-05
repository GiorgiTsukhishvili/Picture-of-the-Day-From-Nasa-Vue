<template>
  <div></div>
</template>

<script setup lang="ts">
import { fetchNasaImages } from "@/services";
import { onMounted, ref } from "vue";
import type { NasaImagesTypes } from "@/types";

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
