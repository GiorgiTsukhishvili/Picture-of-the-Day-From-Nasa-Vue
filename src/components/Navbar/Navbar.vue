<template>
  <div>
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'favorites' }"> Favorites </RouterLink>
  </div>
</template>

<script lang="ts">
import { RouterLink } from "vue-router";

export default {
  name: "NavbarComponent",
  components: { RouterLink },
};
</script>
