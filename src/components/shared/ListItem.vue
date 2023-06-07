<template>
  <component
    :is="link ? 'RouterLink' : 'button'"
    class="w-full flex items-center p-2"
  >
    <div class="flex-1 text-left">
      <h2 class="font-semibold text-lg">{{ title }}</h2>
      <p class="text-base-600 text-sm">{{ label }}</p>
    </div>
    <Next />
  </component>
</template>

<script setup>
import Next from './icons/Next.vue'
defineProps({
  title: String,
  label: String,
  link: Boolean
})
</script>
