<script setup lang="ts">
import useSimulator from '@/modules/new-simulator/useSimulator.ts'
import useTeams from '@/modules/new-simulator/useTeams.ts'
import NFLTeam from '@/modules/new-simulator/components/NFLTeam.vue'

const { getSelectedTeams } = useSimulator()
const { teams } = useTeams()
</script>

<template>
  {{ getSelectedTeams }}
  <div class="w-full grid grid-cols-3 gap-4 rounded-md">

    <!-- Configuration -->
    <div class="col-span-1 bg-dark rounded-md p-4 text-white">

    </div>

    <!-- Team Selection -->
    <div class="col-span-2 flex flex-col gap-4">
      <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        <NFLTeam v-for="team in teams" :team="team" :key="team.shortName" />
      </div>
    </div>

  </div>
</template>

<style scoped></style>
