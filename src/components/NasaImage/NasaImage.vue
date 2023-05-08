<template>
  <div class="rounded-md mt-20 px-10 flex items-center flex-col">
    <a :href="url" target="_blank">
      <img :src="url" alt="nasa-picture" class="rounded-md w-full h-96" />
    </a>
    <div class="py-6">
      <h1 class="font-bold text-xl pb-6">{{ title }}</h1>
      <h1 v-if="copyright" class="pb-6 text-lg">Author: {{ copyright }}</h1>
      <p class="pb-6">{{ explanation }}</p>
      <h2 class="font-bold">{{ date }}</h2>
      <button
        class="text-white bg-green-500 border-none absolute top-16 right-10 px-4 py-2 rounded-md"
        @click="existsOrNot.func"
      >
        {{ existsOrNot.bool ? "Remove from favorites" : "Add to favorites" }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NasaImagesTypes } from "@/types";
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const { push } = useRouter();

const {
  dispatch,
  state: { favorites },
} = useStore();

const props = defineProps<{
  url: string;
  explanation: string;
  title: string;
  date: string;
  copyright?: string;
}>();

const existsOrNot = computed(() =>
  favorites.images.some((el: NasaImagesTypes) => el.title === props.title)
    ? { bool: true, func: removeFavorites }
    : { bool: false, func: addInFavorites }
);

const addInFavorites = () => {
  dispatch("addFavoriteImage", props);
};

const removeFavorites = () => {
  dispatch("removeFavoriteImage", props.title);
  push("/");
};
</script>
