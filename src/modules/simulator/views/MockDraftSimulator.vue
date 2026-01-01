<script setup>
import useTeams from '@/modules/teams/useTeams.js'
import Team from '@/modules/simulator/components/Team.vue'
import { reactive } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import TeamLogo from '@/modules/teams/components/TeamLogo.vue'
import OptionWrapper from '@/modules/simulator/components/OptionWrapper.vue'
import BaseSwitch from '@/components/BaseSwitch.vue'

const teams = useTeams

const options = reactive({
  rounds: 1,
  priorities: {
    replaceExpiringContracts: true,
    replaceAgingPlayers: true,
    prioritisePremiumPositions: true,
  },
  selectedTeams: [],
  premiumPositions: ['T', 'EDGE', 'QB', 'CB']
})

const selectTeam = (team) => {
  const index = options.selectedTeams.indexOf(team)

  // Team has already been selected
  if (index !== -1) {
    options.selectedTeams.splice(index, 1)
  } else {
    options.selectedTeams.push(team)
  }
}

const selectAll = () => {
  teams.forEach((team) => {
    if (! isTeamSelected(team)) {
      options.selectedTeams.push(team)
    }
  })
}

const unselectAll = () => {
  options.selectedTeams = []
}

const isTeamSelected = (team) => {
  return options.selectedTeams.indexOf(team) !== -1
}
</script>

<template>
  <div class="w-full grid grid-cols-3 border-2 border-dark rounded-md">
    <div class="bg-dark p-4 text-white">
      <div class="h-full flex flex-col gap-4">
        <!-- Configuration -->
        <option-wrapper label="Replace Aging Players">
          <base-switch v-model="options.priorities.replaceAgingPlayers" />
        </option-wrapper>

        <!-- Team Selection Display -->
        <option-wrapper label="Selecting For">
          <div class="grid grid-cols-8 gap-4 lg:grid-cols-12">
            <div v-for="team in options.selectedTeams" :key="team.shortName"  class="p-1 rounded-md bg-white">
              <team-logo :team="team" class="size-6" />
            </div>
          </div>
        </option-wrapper>


      </div>
    </div>

    <div class="p-4 col-span-2 flex flex-col gap-4">
      <div class="flex flex-row-reverse gap-4">
        <base-button @click="selectAll">Select All</base-button>
        <base-button @click="unselectAll">Unselect All</base-button>
      </div>

      <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        <team
          :key="team.shortName"
          v-for="team in teams"
          :team="team"
          :selected="isTeamSelected(team)"
          @click-team="selectTeam"
        />
      </div>
    </div>
  </div>
</template>
