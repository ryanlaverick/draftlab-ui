<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <span class="font-exclamation text-white">{{ label }}</span>

    <slot />
  </div>
</template>
