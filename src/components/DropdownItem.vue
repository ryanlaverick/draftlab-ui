<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  disabled: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<template>
  <div class="px-4 py-2 font-normal duration-300" :class="{
    'cursor-pointer hover:bg-light': !disabled,
    'cursor-not-allowed !bg-gray-400 !hover:bg-gray-500': disabled
  }">
    <div class="transform skew-x-12">
      <div class="flex items-center gap-2">
        <Icon v-if="disabled" icon="carbon:locked" class="size-4" />
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
