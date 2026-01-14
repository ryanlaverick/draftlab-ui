<script setup>
defineProps({
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
})
</script>

<template>
  <button
    class="relative px-4 py-2 transform -skew-x-12 rounded-md duration-300 text-white"
    :class="{
      'cursor-not-allowed !bg-gray-400 !hover:bg-gray-500': disabled,
      'group bg-dark hover:bg-light cursor-pointer': !disabled,
    }"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <span class="inline-block transform skew-x-12 uppercase text-sm group-hover:underline">
      <slot />
    </span>
  </button>
</template>
