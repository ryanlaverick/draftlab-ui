<script setup lang="ts">
import useTeams from '@/modules/new-simulator/useTeams'
import useSimulator from '@/modules/new-simulator/useSimulator'
import { computed } from 'vue'
import OptionWrapper from '@/modules/simulator/components/OptionWrapper.vue'

const {
  teams
} = useTeams()

const {
  selectSimulationYear,
  getYearToSimulate,
} = useSimulator()

const getYears = computed(() => {
  let eligibleYears = []

  teams.forEach((team) => {
    team.draftClasses.forEach((draftClass) => {
      if (eligibleYears.indexOf(draftClass.year) === -1) {
        eligibleYears.push(draftClass.year)
      }
    })
  })

  return eligibleYears.sort((a, b) => a - b)
})
</script>

<template>
  <option-wrapper label="Simulation Year">
    <div class="w-full bg-white rounded-md shadow-inner p-2 grid grid-cols-7 gap-4">
      <div
        v-for="year in getYears"
        :key="year"
        @click="selectSimulationYear(year)"
        class="bg-dark hover:bg-light cursor-pointer duration-300 py-2 px-4 rounded-md"
        :class="{
          'bg-light': getYearToSimulate === year
        }"
      >
        <span class="text-sm font-exclamation">{{ year }}</span>
      </div>
    </div>
  </option-wrapper>
</template>

<style scoped>

</style>
