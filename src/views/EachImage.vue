<template>
  <div v-if="imageInfo !== undefined">
    <NasaImage
      :imageUrl="imageInfo.url"
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
import { computed } from "vue";

const {
  params: { title },
} = useRoute();

const {
  state: {
    homeImages: { images },
  },
} = useStore();

const imageInfo = computed(
  () => images.filter((image: NasaImagesTypes) => image.title === title)[0]
);
</script>
