<template>
  <button
    @click="emits('call-function')"
    class="text-white bg-green-500 border-none absolute top-16 right-10 px-4 py-2 rounded-md"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
defineProps<{ text: string }>();
const emits = defineEmits<{ (e: "call-function"): void }>();
</script>
