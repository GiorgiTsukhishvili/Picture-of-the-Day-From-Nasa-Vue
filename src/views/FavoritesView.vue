<template>
  <div v-if="favorites.length === 0">
    <h1
      class="text-2xl font-semibold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
    >
      No favorites so far, go ahead and add some.
    </h1>
  </div>
  <div v-else class="flex flex-wrap justify-center px-10 my-16 gap-10">
    <RouterLink
      v-for="(image, i) in favorites"
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
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";

const {
  state: { favorites },
} = useStore();
</script>
