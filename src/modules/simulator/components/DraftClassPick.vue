<script setup>
import { computed } from 'vue'

const props = defineProps({
  pick: {
    type: Object,
    required: true
  },
  selectedPicks: {
    type: Array,
    required: true
  }
})

const isSelected = computed(() => {
  return props.selectedPicks?.indexOf(props.pick) !== -1
})
</script>

<template>
  <div v-if="pick" :class="{ 'bg-light hover:bg-lightest': !isSelected, 'bg-green-600': isSelected }" class=" duration-300 cursor-pointer rounded-md p-0.5 h-[50px] w-[75px] font-exclamation text-xs text-center flex flex-col items-center">
    <span v-if="pick.compensatory" class="opacity-50">C</span>
    <span>{{ pick.pick }}</span>
    <span>Rd {{ pick.round }}</span>
    <span v-if="pick.from" class="opacity-50">{{ pick.from }}</span>
  </div>
</template>

<style scoped></style>
