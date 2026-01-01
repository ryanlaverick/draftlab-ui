<script setup>
import useTeams from '@/modules/teams/useTeams.js'
import Team from '@/modules/simulator/components/Team.vue'
import { reactive } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import TeamLogo from '@/modules/teams/components/TeamLogo.vue'
import OptionWrapper from '@/modules/simulator/components/OptionWrapper.vue'
import BaseSwitch from '@/components/BaseSwitch.vue'
import { Icon } from '@iconify/vue'

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

const unselectTeam = (team) => {
  const index = options.selectedTeams.indexOf(team)

  if (index !== -1) {
    options.selectedTeams.splice(index, 1)
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
  <div class="w-full grid grid-cols-3 gap-4 rounded-md">
    <div class="bg-dark rounded-md p-4 text-white">

      <div class="h-full flex flex-col gap-16 justify-between">
        <div class="h-full flex flex-col gap-16">
          <div class="w-full text-center font-exclamation flex flex-col">
            <span class="font-semibold text-md">Mock Draft</span>
            <span class="font-bold text-xl">Simulator</span>
          </div>

          <!-- Rounds -->
          <div>
            <option-wrapper label="Rounds"></option-wrapper>
          </div>

          <div class="flex flex-col gap-8">
            <!-- Configuration -->
            <option-wrapper label="Replace Aging Players">
              <base-switch v-model="options.priorities.replaceAgingPlayers" />
            </option-wrapper>

            <option-wrapper label="Replace Expiring Contracts">
              <base-switch v-model="options.priorities.replaceExpiringContracts" />
            </option-wrapper>

            <option-wrapper label="Prioritise Premium Positions">
              <base-switch v-model="options.priorities.prioritisePremiumPositions" />
            </option-wrapper>
          </div>

          <!-- Team Selection Display -->
          <option-wrapper label="Selecting For">
            <div class="grid grid-cols-8 gap-4 lg:grid-cols-12">
              <div v-for="team in options.selectedTeams" :key="team.shortName"  class="group relative p-1 rounded-md bg-white">
                <div class="opacity-0 scale-75 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100 size-3 rounded-full bg-red-500 hover:bg-red-700 cursor-pointer absolute -top-1 -right-1 text-white flex items-center justify-center">
                  <Icon icon="charm:cross" class="size-2.5" @click="unselectTeam(team)" />
                </div>
                <team-logo :team="team" class="size-6" />
              </div>
            </div>
          </option-wrapper>
        </div>

        <!-- Confirm -->
        <div class="w-full">
          <base-button class="bg-light hover:bg-lightest hover:text-dark w-full">Confirm</base-button>
        </div>
      </div>
    </div>

    <div class="col-span-2 flex flex-col gap-4">
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
