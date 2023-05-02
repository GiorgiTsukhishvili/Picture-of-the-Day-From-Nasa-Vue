<template>
  <Navbar />
  <RouterView />
</template>

<script lang="ts">
import { RouterView } from "vue-router";
import { Navbar } from "@/components";

export default {
  name: "App",
  components: { Navbar, RouterView },
};
</script>
