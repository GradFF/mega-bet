<template>
  <header class="w-full flex items-center text-primary-600 justify-between">
    <div class="flex items-center">
      <RouterLink v-if="to" :to="to" class="mr-3">
        <Back />
      </RouterLink>
      <h1 class="text-2xl font-bold text-center">{{ page }}</h1>
    </div>
    <Dolar />
  </header>
</template>

<script setup>
import Back from './icons/Back.vue'
import Dolar from './icons/Dolar.vue'

defineProps({
  to: String,
  page: String
})
</script>
