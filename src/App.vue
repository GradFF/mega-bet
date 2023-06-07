<template>
  <div class="bg-base-200 text-base-700">
    <div class="min-h-screen w-full max-w-screen-md mx-auto px-4 md:px-6">
      <RouterView />
    </div>
  </div>
</template>
<script setup>
import Header from './components/shared/Header.vue'
</script>
