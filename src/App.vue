<template>
  <TheNavbar />
  <RouterView />
</template>

<script lang="ts" setup>
import { RouterView } from "vue-router";
import { TheNavbar } from "@/components";
</script>
