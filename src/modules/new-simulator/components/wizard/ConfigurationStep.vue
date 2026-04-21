<script setup lang="ts">
import useSimulator from '@/modules/new-simulator/useSimulator.ts'
import useTeams from '@/modules/new-simulator/useTeams.ts'
import NFLTeam from '@/modules/new-simulator/components/NFLTeam.vue'
import { computed } from 'vue'

const { getYearToSimulate } = useSimulator()
const { teams, getFirstPickForYear } = useTeams()

const orderedTeams = computed(() => {
  let teamsToOrder = teams
  return teamsToOrder.sort((teamA, teamB) => {
    let pickA = getFirstPickForYear(teamA, getYearToSimulate.value).pick
    let pickB = getFirstPickForYear(teamB, getYearToSimulate.value).pick

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
  <div class="w-full grid grid-cols-3 gap-4 rounded-md">
    <!-- Configuration -->
    <div class="col-span-1 bg-dark rounded-md p-4 text-white"></div>

    <!-- Team Selection -->
    <div class="col-span-2 flex flex-col gap-4">
      <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        <NFLTeam v-for="team in orderedTeams" :team="team" :key="team.shortName" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
