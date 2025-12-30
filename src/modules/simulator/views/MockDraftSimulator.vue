<script setup>
import useTeams from '@/modules/teams/useTeams.js'
import Team from '@/modules/simulator/components/Team.vue'
import { ref } from 'vue'

const teams = useTeams

const selectedTeams = ref([])

const selectTeam = (team) => {
  const index = selectedTeams.value.indexOf(team)

  // Team has already been selected
  if (index !== -1) {
    selectedTeams.value.splice(index, 1)
  } else {
    selectedTeams.value.push(team)
  }
}
</script>

<template>
  <div class="w-full grid grid-cols-3 border-2 border-dark rounded-md">
    <div class="bg-dark">
      <div v-for="team in selectedTeams" :key="team.shortName" class="text-white">
        {{ team.name }}
      </div>
    </div>

    <div class="p-4 col-span-2 flex flex-col gap-4">
      <div class="flex flex-row-reverse">
        Controls
      </div>

      <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        <team :key="team.shortName" v-for="team in teams" :team="team" :selected="selectedTeams.indexOf(team) !== -1" @click-team="selectTeam" />
      </div>
    </div>
  </div>
</template>
