<template>
  <img
    v-if="isLoading"
    :src="Rocket"
    alt="rocket"
    class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
  />
  <div v-else class="flex flex-wrap justify-center px-10 my-16 gap-10">
    <button
      @click="loadMoreImages"
      class="text-white bg-green-500 border-none absolute top-16 right-10 px-4 py-2 rounded-md"
    >
      Load More
    </button>
    <RouterLink
      v-for="(image, i) in currentImages"
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
import { fetchNasaImages } from "@/services";
import { computed, onMounted, ref } from "vue";
import Rocket from "@/assets/images/svgs/rocket.svg";
import { useStore } from "vuex";

const isLoading = ref<boolean>(true);

const store = useStore();

const currentImages = computed(() => store.state.homeImages.images);

const images = async (dispatch: string, amount: number) => {
  const data = await fetchNasaImages(amount);
  store.dispatch(dispatch, data.data);
  isLoading.value = false;
};

const loadMoreImages = async () => {
  isLoading.value = true;
  images("loadMoreHomeImages", 10);
};

onMounted(() => {
  if (currentImages.value.length === 0) {
    images("addHomeImages", 20);
  } else {
    isLoading.value = false;
  }
});
</script>
