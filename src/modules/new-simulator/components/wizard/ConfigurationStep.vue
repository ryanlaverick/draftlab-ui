<script setup lang="ts">
import useSimulator from '@/modules/new-simulator/useSimulator.ts'
import useTeams from '@/modules/new-simulator/useTeams.ts'
import NFLTeam from '@/modules/new-simulator/components/NFLTeam.vue'
import { computed } from 'vue'
import BaseButton from '@/components/BaseButton.vue'

const {
  getYearToSimulate,
  selectAllTeamsForSimulation,
  unselectAllTeamsForSimulation,
  getSelectedTeams,
} = useSimulator()

const {
  teams,
  getFirstPickForYear
} = useTeams()

const orderedTeams = computed(() => {
  let teamsToOrder = teams
  return teamsToOrder.sort((teamA, teamB) => {
    let pickA = getFirstPickForYear(teamA, getYearToSimulate.value)?.pick ?? 0
    let pickB = getFirstPickForYear(teamB, getYearToSimulate.value)?.pick ?? 0

    if (pickA < pickB) {
      return -1
    }

    if (pickA > pickB) {
      return 1
    }

    return 0
  })
})

const allTeamsSelected = computed(() => {
  return getSelectedTeams.value.length === teams.length
})

const noTeamsSelected = computed(() => {
  return getSelectedTeams.value.length === 0
})
</script>

<template>
  <div class="w-full grid grid-cols-3 gap-4 rounded-md">
    <!-- Configuration -->
    <div class="col-span-1 bg-dark rounded-md p-4 text-white"></div>

    <!-- Team Selection -->
    <div class="col-span-2 flex flex-col gap-4">
      <div class="flex flex-row-reverse gap-4">
        <base-button @click="selectAllTeamsForSimulation" :disabled="allTeamsSelected">Select All</base-button>
        <base-button @click="unselectAllTeamsForSimulation" :disabled="noTeamsSelected">Unselect All</base-button>
      </div>

      <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        <NFLTeam v-for="team in orderedTeams" :team="team" :key="team.shortName" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
