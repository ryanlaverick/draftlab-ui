<script setup>
import useTeams from '@/modules/teams/useTeams.js'
import Team from '@/modules/simulator/components/Team.vue'

const teams = useTeams
</script>

<template>
  <p>Mock Draft Simulator</p>

  <div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
    <team :key="team.shortName" v-for="team in teams" :team="team" />
  </div>
</template>
