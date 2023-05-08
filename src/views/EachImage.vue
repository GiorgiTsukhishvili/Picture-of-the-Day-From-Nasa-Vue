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
  state: {
    homeImages: { images },
  },
} = useStore();

const imageInfo = images.find(
  (image: NasaImagesTypes) => image.title === title
);
</script>
