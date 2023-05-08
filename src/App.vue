<template>
  <TheNavbar />
  <RouterView />
</template>

<script lang="ts" setup>
import { RouterView } from "vue-router";
import { TheNavbar } from "@/components";
import { useStore } from "vuex";
import { onBeforeMount } from "vue";

const { dispatch } = useStore();

onBeforeMount(() => {
  dispatch("loadFavoriteImages");
});
</script>
