<script setup>
import DraftClassPick from '@/modules/simulator/components/DraftClassPick.vue'

defineProps({
  year: {
    type: Number,
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
</script>

<template>
  <div class="flex flex-col gap-2">
    <span class="font-exclamation text-sm">{{ year }}</span>

    <div class="grid grid-cols-5 gap-2">
      <draft-class-pick
        v-for="pick in picks"
        :pick="pick"
        :key="pick.pick"
        :selected-picks="selectedPicks"
        @click="selectPick(pick)"
      />
    </div>
  </div>
</template>

<style scoped></style>
