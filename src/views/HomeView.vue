<template>
  <img
    v-if="isLoading"
    :src="Rocket"
    alt="rocket"
    class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
  />
  <div v-else class="flex flex-col items-center mt-16 gap-10">
    <NasaImage
      v-for="(image, i) in nasaImages"
      :key="i"
      :imageUrl="image.url"
      :explanation="image.explanation"
      :title="image.title"
      :date="image.date"
      :copyright="image.copyright"
    />
  </div>
</template>

<script setup lang="ts">
import { fetchNasaImages } from "@/services";
import { onMounted, ref } from "vue";
import type { NasaImagesTypes } from "@/types";
import { NasaImage } from "@/components";
import Rocket from "@/assets/images/svgs/rocket.svg";

const nasaImages = ref<NasaImagesTypes[]>([]);
const isLoading = ref<boolean>(true);

onMounted(() => {
  const images = async () => {
    const data = await fetchNasaImages(10);
    nasaImages.value = data.data;
    isLoading.value = false;
  };

  images();
});
</script>

<style scoped></style>
