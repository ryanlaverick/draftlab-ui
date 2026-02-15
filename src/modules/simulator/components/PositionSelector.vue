<script setup>
import usePositions from '@/composables/usePositions.js'
import PositionFilter from '@/modules/simulator/components/PositionFilter.vue'
import BaseDropdown from '@/components/BaseDropdown.vue'
import { Icon } from '@iconify/vue'
const { positions } = usePositions()

defineProps({
  selectedPositions: {
    type: Array,
    required: true,
  },
})

const emits = defineEmits(['togglePosition'])

const selectPosition = (position) => {
  emits('togglePosition', position)
}
</script>

<template>
  <base-dropdown trigger="click" class="!-skew-x-0 !w-full !">
    <template #trigger="{ open }">
      <div
        class="w-full uppercase text-xs font-bold text-white flex items-center justify-between gap-2 cursor-pointer hover:text-light duration-300 sticky top-0 z-10 bg-darkest p-4 rounded-t-md"
      >
        <span>Positions: {{ selectedPositions.join(', ') }}</span>

        <Icon
          icon="mdi:chevron-right"
          class="transition-transform duration-300 size-4"
          :class="{ 'rotate-90': open }"
        />
      </div>
    </template>

    <div class="flex flex-col">
      <position-filter
        v-for="position in positions"
        :key="position.id"
        :selected-positions="selectedPositions"
        :position="position"
        @toggle-position="selectPosition"
        class="!first:rounded-t-md !last:rounded-b-md !rounded-none"
      />
    </div>
  </base-dropdown>
</template>
