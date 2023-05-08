<template>
  <div v-if="imageInfo !== undefined">
    <NasaImage
      :url="imageInfo.url"
      :explanation="imageInfo.explanation"
      :title="imageInfo.title"
      :date="imageInfo.date"
      :copyright="imageInfo.copyright"
    />
  </div>
</template>

<script setup lang="ts">
import type { NasaImagesTypes } from "@/types";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { NasaImage } from "@/components";

const {
  params: { title },
} = useRoute();

const {
  state: { homeImages, favorites },
} = useStore();

const imageInfo = [...homeImages.images, ...favorites.images].find(
  (image: NasaImagesTypes) => image.title === title
);
</script>
