<template>
  <div v-if="images.length === 0">
    <h1
      class="text-2xl font-semibold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
    >
      No favorites so far, go ahead and add some.
    </h1>
  </div>
  <div v-else class="flex flex-wrap justify-center px-10 my-16 gap-10">
    <ImageLink :currentImages="images" />
  </div>
</template>

<script setup lang="ts">
import { ImageLink } from "@/components";
import { useStore } from "vuex";

const {
  state: {
    favorites: { images },
  },
} = useStore();
</script>
