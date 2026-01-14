<script setup>
import { computed } from 'vue'

const props = defineProps({
  position: {
    type: Object,
    required: true,
  },
  selectedPositions: {
    type: Array,
    required: true,
  },
})

const emits = defineEmits(['togglePosition'])

const isSelected = computed(() => {
  return props.selectedPositions.indexOf(props.position.id) !== -1
})

const selectPosition = () => {
  emits('togglePosition', props.position.id)
}
</script>

<template>
  <div
    @click="selectPosition()"
    class="p-2 text-white hover:bg-light rounded-md duration-300 cursor-pointer"
    :class="{
      'bg-light': isSelected,
    }"
  >
    <span class="text-sm">{{ position.value }}</span>
  </div>
</template>
