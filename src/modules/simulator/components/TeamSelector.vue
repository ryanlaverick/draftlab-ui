<script setup>
import BaseDropdown from '@/components/BaseDropdown.vue'
import useTeams from '@/modules/teams/useTeams.js'
import TeamLogo from '@/modules/teams/components/TeamLogo.vue'
import { computed } from 'vue'
import TeamFilter from '@/modules/simulator/components/TeamFilter.vue'

const teams = useTeams

const props = defineProps({
  team: {
    type: Object,
    required: true,
  },
})

const emits = defineEmits(['selectTeam'])

const selectTeam = (team) => {
  emits('selectTeam', team)
}

const availableTeams = computed(() => {
  return teams.filter((team) => team.shortName !== props.team.shortName)
})
</script>

<template>
  <base-dropdown trigger="click" class="!-skew-x-0 !w-full">
    <template #trigger>
      <div
        class="w-full uppercase text-xs font-bold text-white flex items-center gap-2 cursor-pointer hover:text-light duration-300 bg-darkest p-4 rounded-md"
      >
        <team-logo :team="team" class="size-4" />
        <span>{{ team.name }}</span>
      </div>
    </template>

    <div class="flex flex-col !max-h-[300px] overflow-y-auto !z-[100]">
      <team-filter v-for="team in availableTeams" :key="team.shortName" :team="team" @select-team="selectTeam" />
    </div>
  </base-dropdown>
</template>

<style scoped></style>
