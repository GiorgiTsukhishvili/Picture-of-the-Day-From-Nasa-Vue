<template>
  <img
    v-if="isLoading"
    :src="Rocket"
    alt="rocket"
    class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
  />
  <div v-else class="flex flex-wrap justify-center px-10 my-16 gap-10">
    <!-- <NasaImage
      v-for="(image, i) in nasaImages"
      :key="i"
      :imageUrl="image.url"
      :explanation="image.explanation"
      :title="image.title"
      :date="image.date"
      :copyright="image.copyright"
    /> -->
    <RouterLink
      :to="'/'"
      class="hover:scale-105 duration-200 max-w-[330px] w-full shadow-3xl p-3"
      v-for="(image, i) in nasaImages"
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
    const data = await fetchNasaImages(20);
    nasaImages.value = data.data;
    isLoading.value = false;
  };

  images();
});
</script>

<style scoped></style>
