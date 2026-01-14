<script setup>
import usePositions from '@/composables/usePositions.js'
import BaseAccordion from '@/components/BaseAccordion.vue'
import PositionFilter from '@/modules/simulator/components/PositionFilter.vue'
const { positions } = usePositions()

defineProps({
  selectedPositions: {
    type: Array,
    required: true
  }
})

const emits = defineEmits(['togglePosition'])

const selectPosition = (position) => {
  emits('togglePosition', position)
}
</script>

<template>
  <base-accordion :opened-by-default="false">
    Positions: {{ selectedPositions.join(", ") }}

    <template #content>
      <div class="flex flex-col gap-2">
        <position-filter v-for="position in positions" :key="position.id" :selected-positions="selectedPositions" :position="position" @toggle-position="selectPosition" />
      </div>
    </template>
  </base-accordion>
</template>
