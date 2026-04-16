<script setup>
import DraftClassPick from '@/modules/simulator/components/DraftClassPick.vue'
import { computed } from 'vue'

const props = defineProps({
  year: {
    type: String,
    required: true,
  },
  picks: {
    type: Array,
    required: true
  },
  selectedPicks: {
    type: Array,
    required: true
  }
})

const emits = defineEmits(['selectPick'])

const selectPick = (pick) => {
  emits('selectPick', pick)
}

const orderedPicks = computed(() => {
  const picksArray = props.picks

  return picksArray.sort((a, b) => {
    console.log(a, b)

    const pickA = a.pick
    const pickB = b.pick

    if (pickA < pickB) {
      return -1
    }
    if (pickA > pickB) {
      return 1
    }

    return 0
  })
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <span class="font-exclamation text-sm">{{ year }}</span>

    <div class="grid grid-cols-5 gap-2">
      <draft-class-pick
        v-for="pick in orderedPicks"
        :pick="pick"
        :key="pick.pick"
        :selected-picks="selectedPicks"
        @click="selectPick(pick)"
      />
    </div>
  </div>
</template>

<style scoped></style>
