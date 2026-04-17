<script setup>
import { computed } from 'vue'

const props = defineProps({
  school: {
    type: Object,
    required: true,
  },
  selected: {
    type: Boolean,
    required: true,
  },
})

const emits = defineEmits(['clickSchool'])
</script>

<template>
  <div
    @click="emits('clickSchool', school)"
    class="relative overflow-hidden rounded-md py-4 px-2 cursor-pointer"
    :class="{ 'opacity-50': !selected }"
  >
    <!-- Tilted colour overlay — always visible -->
    <div
      class="absolute bg-light inset-0 [clip-path:polygon(0_0,90%_0,85%_100%,0_100%)]"
    ></div>

    <!-- Logo -->
    <img
      :src="school.image"
      :alt="school.name"
      class="relative z-10 size-10 object-contain"
    />
  </div>
</template>

<style scoped></style>
