<template>
  <li class="mr-2">
    <button
      @click="$emit('update')"
      class="inline-block p-4 border-b-2 rounded-t-lg hover:text-base-600"
      :class="
        active
          ? 'border-primary-600 active text-primary-600'
          : 'border-transparent hover:border-base-300 '
      "
    >
      {{ label }}
    </button>
  </li>
</template>

<script setup>
defineProps({
  label: String,
  active: Boolean
})
</script>
