<script setup>
import usePositions from '@/composables/usePositions.js'
import { computed } from 'vue'
import BaseSelect from '@/components/BaseSelect.vue'
const { positions } = usePositions()

const props = defineProps({
  selectedPositions: {
    type: Array,
    required: true
  }
})

const availableOptions = computed(() => {
  let availablePositions = Object.entries(positions)

  availablePositions.filter(
    (available) => props.selectedPositions.indexOf(available) !== -1
  )

  return availablePositions
})
</script>

<template>
  <base-select :available-options="availableOptions" :selected-options="selectedPositions" />
</template>
