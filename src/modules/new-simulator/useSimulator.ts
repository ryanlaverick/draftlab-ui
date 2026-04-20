import { computed, reactive } from 'vue'
import Positions from '@/modules/new-simulator/usePositions'

interface DraftConfig {
  roundsToSimulate: number,
  prioritiseReplacingExpiringContracts: boolean,
  prioritiseReplacingAgingPlayers: boolean,
  prioritiseReplacingPremiumPositions: boolean,
  selectedTeams: string[],
  premiumPositions: Positions[]
}

interface Simulation {
  currentPick: number
}

const state = reactive({
  config: {
    roundsToSimulate: 1,
    prioritiseReplacingExpiringContracts: false as boolean,
    prioritiseReplacingAgingPlayers: false as boolean,
    prioritiseReplacingPremiumPositions: false as boolean,
    selectedTeams: [],
    premiumPositions: [
      Positions.EDGE,
      Positions.OFFENSIVE_TACKLE,
      Positions.QUARTERBACK,
      Positions.WIDE_RECEIVER,
      Positions.CORNERBACK
    ],
  } satisfies DraftConfig,
  simulation: {
    currentPick: 1,
  } satisfies Simulation,
})

export default function useSimulator() {
  const getConfig = computed(() => state.config)
  const getSelectedTeams = computed(() => state.config.selectedTeams)

  const resetSimulation = () => {
    state.simulation.currentPick = 1


    state.config.roundsToSimulate = 1
    state.config.prioritiseReplacingExpiringContracts = false
    state.config.prioritiseReplacingAgingPlayers = false
    state.config.prioritiseReplacingPremiumPositions = false
    state.config.selectedTeams = []
    state.config.premiumPositions = [
      Positions.EDGE,
      Positions.OFFENSIVE_TACKLE,
      Positions.QUARTERBACK,
      Positions.WIDE_RECEIVER,
      Positions.CORNERBACK
    ]
  }

  const selectSimulationRounds = (rounds: number) => state.config.roundsToSimulate = rounds

  const prioritiseReplacingExpiringContracts = (value: boolean) => state.config.prioritiseReplacingExpiringContracts = value
  const prioritiseReplacingAgingPlayers = (value: boolean) => state.config.prioritiseReplacingAgingPlayers = value
  const prioritiseReplacingPremiumPositions = (value: boolean) => state.config.prioritiseReplacingPremiumPositions = value

  const isTeamSelectedForSimulation = (team: string) => state.config.selectedTeams.includes(team)

  const selectTeamForSimulation = (team: string) => {
    let index = state.config.selectedTeams.indexOf(team)

    if (index === -1) {
      state.config.selectedTeams.push(team)
    } else {
      state.config.selectedTeams.splice(index, 1)
    }
  }

  return {
    getConfig,

    selectSimulationRounds,
    prioritiseReplacingExpiringContracts,
    prioritiseReplacingAgingPlayers,
    prioritiseReplacingPremiumPositions,

    getSelectedTeams,
    isTeamSelectedForSimulation,
    selectTeamForSimulation,

    resetSimulation,

    Positions
  }
}
