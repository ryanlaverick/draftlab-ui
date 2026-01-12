<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="text-base opacity-70 underline flex items-center gap-2 cursor-pointer hover:text-light duration-300" v-bind="$attrs">
    <Icon icon="ic:round-arrow-back" />

    <slot />
  </div>
</template>

<style scoped></style>
