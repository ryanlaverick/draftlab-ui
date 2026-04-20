<script setup>
import { computed } from 'vue'
import { should } from 'vitest'

const props = defineProps({
  pick: {
    type: Object,
    required: true
  },
  selectedPicks: {
    type: Array,
    required: true
  },
  currentPick: {
    type: Number,
    required: true,
  },
})

const emits = defineEmits(['selectPick'])

const isSelected = computed(() => {
  return props.selectedPicks?.indexOf(props.pick) !== -1
})

const shouldBeDisabled = computed(() => {
  return props.currentPick > props.pick.pick
})

const selectPick = () => {
  if (shouldBeDisabled.value) {
    return
  }

  emits('selectPick', props.pick)
}
</script>

<template>
  <div v-if="pick" :class="{
    'bg-gray-400 cursor-not-allowed': shouldBeDisabled,
    'bg-light hover:bg-lightest cursor-pointer': !isSelected && !shouldBeDisabled,
    'bg-green-600 cursor-pointer': isSelected && !shouldBeDisabled
  }" @click="selectPick" :aria-disabled="shouldBeDisabled" class="duration-300 rounded-md p-0.5 min-h-[50px] min-w-[75px] font-exclamation text-xs text-center flex flex-col items-center">
    <span v-if="pick.compensatory" class="opacity-50">C</span>
    <span class="text-md font-bold">{{ pick.pick }}</span>
    <span class="opacity-75">Rd {{ pick.round }}</span>
    <span v-if="pick.from" class="opacity-50">{{ pick.from }}</span>
  </div>
</template>

<style scoped></style>
