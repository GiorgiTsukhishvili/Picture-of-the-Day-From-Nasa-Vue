<template>
  <div class="rounded-md mt-20 px-10 flex items-center flex-col">
    <a :href="imageUrl" target="_blank">
      <img :src="imageUrl" alt="nasa-picture" class="rounded-md w-full h-96" />
    </a>
    <div class="py-6">
      <h1 class="font-bold text-xl pb-6">{{ title }}</h1>
      <h1 v-if="copyright" class="pb-6 text-lg">Author: {{ copyright }}</h1>
      <p class="pb-6">{{ explanation }}</p>
      <h2 class="font-bold">{{ date }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imageUrl: string;
  explanation: string;
  title: string;
  date: string;
  copyright?: string;
}>();
</script>
