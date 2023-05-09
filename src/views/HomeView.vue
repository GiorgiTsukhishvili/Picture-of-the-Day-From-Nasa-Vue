<template>
  <img
    v-if="isLoading"
    :src="Rocket"
    alt="rocket"
    class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
  />
  <div v-else class="flex flex-wrap justify-center px-10 my-16 gap-10">
    <GreenButton :text="'Load More'" @call-function="loadMoreImages" />
    <ImageLink :currentImages="currentImages" />
  </div>
</template>

<script setup lang="ts">
import { fetchNasaImages } from "@/services";
import { computed, onMounted, ref } from "vue";
import Rocket from "@/assets/images/svgs/rocket.svg";
import { useStore } from "vuex";
import { GreenButton, ImageLink } from "@/components";

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
