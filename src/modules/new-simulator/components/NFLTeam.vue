<script setup lang="ts">
import useTeams, { DraftPick } from '@/modules/new-simulator/useTeams.js'
import useSimulator from '@/modules/new-simulator/useSimulator'
import { Team } from '@/modules/new-simulator/useTeams.js'
import { computed, onMounted, ref, watch } from 'vue'
import TeamLogo from '@/modules/teams/components/TeamLogo.vue'

const {
  isTeamSelectedForSimulation,
  selectTeamForSimulation,
  getYearToSimulate,
  getSelectedTeams,
} = useSimulator()

const { getBackgroundColor, getBorderColor, getFirstPickForYear } = useTeams()

const props = defineProps<{
  team: Team
}>()

const isSelected = ref(false)
const pickToDisplay= ref({
  round: 0,
  pick: 0,
  from: null,
  compensatory: false
} as DraftPick)

const computedClasses = computed(() => {
  const teamName = props.team.name

  return [
    getBackgroundColor(teamName),
    getBorderColor(teamName),
    isSelected.value ? getBorderColor(teamName) : '',
    {
      'before:scale-x-100': isSelected.value,
      '!border-gray-200': !isSelected.value,
    },
  ]
})

onMounted(() => {
  pickToDisplay.value = getFirstPickForYear(props.team, getYearToSimulate.value)
})

watch(
  () => getSelectedTeams.value,
  () => {
    isSelected.value = isTeamSelectedForSimulation(props.team.name)
  },
  { immediate: true, deep: true },
)

watch(
  () => getYearToSimulate.value,
  () => {
    pickToDisplay.value = getFirstPickForYear(props.team, getYearToSimulate.value)
  },
  { immediate: true, deep: true },
)
</script>

<template>
  <div
    @click="selectTeamForSimulation(team.name)"
    class="relative overflow-hidden border-3 rounded-md p-4 flex items-center gap-4 cursor-pointer transition-colors duration-300 before:absolute before:inset-0 before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:[clip-path:polygon(0_0,75%_0,72%_100%,0_100%)] hover:border-light"
    :class="computedClasses"
  >
    <div
      class="relative z-10 w-full flex items-center justify-between gap-4"
      :class="{ 'opacity-50': !isSelected }"
    >
      <div>
        <p
          class="uppercase font-semibold transition-colors duration-300 text-xs"
          :class="{ 'text-white': isSelected }"
        >
          {{ team.name }}
        </p>

        <span class="font-bold text-xs opacity-50" :class="{ 'text-white': isSelected }">
          Pick {{ pickToDisplay?.pick }}
        </span>
      </div>

      <team-logo :team="team" :disabled="!isSelected" class="size-10" />
    </div>
  </div>
</template>
