<script setup>
import BaseReturn from '@/components/BaseReturn.vue'
import { computed, onMounted, ref, watch } from 'vue'
import BaseAccordion from '@/components/BaseAccordion.vue'
import Pick from '@/modules/simulator/components/Pick.vue'
import useTeams from '@/modules/teams/useTeams.js'
import usePlayers from '@/modules/simulator/usePlayers.js'
import PositionSelector from '@/modules/simulator/components/PositionSelector.vue'
import Player from '@/modules/simulator/components/Player.vue'
import BaseInput from '@/components/BaseInput.vue'
import FocusPlayerPanel from '@/modules/simulator/components/FocusPlayerPanel.vue'
import BaseButton from '@/components/BaseButton.vue'
import { Icon } from '@iconify/vue'
import OptionWrapper from '@/modules/simulator/components/OptionWrapper.vue'
import TeamSelector from '@/modules/simulator/components/TeamSelector.vue'
import DraftClass from '@/modules/simulator/components/DraftClass.vue'
import TradeMeter from '@/modules/simulator/components/TradeMeter.vue'
import SchoolSelector from '@/modules/simulator/components/SchoolSelector.vue'

const emits = defineEmits(['returnToSettings'])
const props = defineProps({
  settings: {
    type: Object,
    required: true
  }
})

const teams = useTeams
const { getPlayers: players, loadPlayers } = usePlayers()

const isStarted = ref(false)
const isPaused = ref(false)
const currentPick = ref(0)
const draftOrder = ref()
const filterPositions = ref([])
const filterSchools = ref([])
const filterSearch = ref('')
const focusPlayer = ref({})
const currentPage = ref(1)
const selectingFor = ref([])
const pageSize = 10
const simSpeed = ref(1)
const tradingWith = ref()
const tradingWithPicks = ref([])
const tradingFor = ref()
const tradingForPicks = ref([])

const returnToSettings = () => {
  emits('returnToSettings')
}

const selectPage = (page) => {
  currentPage.value = page
}

const filteredPlayers = computed(() => {
  let filteredPlayers = players.value.filter((player) => !player.is_drafted)

  if (filterSearch.value.length > 0) {
    filteredPlayers = filteredPlayers.filter((player) =>
      player.player.toLowerCase().includes(filterSearch.value.toString().toLowerCase()),
    )
  }

  if (filterPositions.value.length > 0) {
    filteredPlayers = filteredPlayers.filter((player) => filterPositions.value.indexOf(player.position) !== -1)
  }

  if (filterSchools.value.length > 0) {
    filteredPlayers = filteredPlayers.filter((player) => filterSchools.value.indexOf(player.team_name) !== -1)
  }

  return filteredPlayers
})

const paginatedPlayers = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  const end = start + pageSize

  return filteredPlayers.value.slice(start, end)
})

const pageRange = computed(() => {
  const maxPage = Math.ceil((filteredPlayers.value.length ?? 0) / pageSize)
  if (maxPage <= 1) return [1]

  const pages = []

  let start = Math.max(1, currentPage.value - 1)
  let end = Math.min(maxPage, currentPage.value + 1)

  if (currentPage.value <= 2) {
    start = 1
    end = Math.min(4, maxPage)
  }

  if (currentPage.value >= maxPage - 1) {
    end = maxPage
    start = Math.max(1, maxPage - 3)
  }

  if (start > 1) {
    pages.push(1)
  }

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  if (end < maxPage) {
    pages.push(maxPage)
  }

  return pages
})

const isPicking = computed(() => {
  if (! isStarted.value) {
    return false
  }

  let thisPick = null
  Object.values(draftOrder.value).forEach(function (picks) {
    picks.forEach(function (pick) {
      if (pick.pick.pick === currentPick.value) {
        thisPick = pick
      }
    })
  })

  return selectingFor.value.indexOf(thisPick?.team.shortName) !== -1
})

const filterPosition = (position) => {
  const positionIndex = filterPositions.value.indexOf(position)

  if (positionIndex === -1) {
    filterPositions.value.push(position)
  } else {
    filterPositions.value.splice(positionIndex, 1)
  }
}

const filterSchool = (school) => {
  const schoolIndex = filterSchools.value.indexOf(school)

  if (schoolIndex === -1) {
    filterSchools.value.push(school)
  } else {
    filterSchools.value.splice(schoolIndex, 1)
  }
}

const selectFocusPlayer = (player) => {
  focusPlayer.value = player
}

const startDraft = () => {
  isStarted.value = true
  currentPick.value = 1
}

const pauseDraft = () => {
  isPaused.value = !isPaused.value
}

const draftPlayerAutomatically = () => {
  draftPlayer(paginatedPlayers.value[0])
}

const draftPlayer = (player) => {
  const eligiblePlayer = paginatedPlayers.value.filter((p) => p.player_id === player.player_id)[0]
  eligiblePlayer.is_drafted = true

  Object.values(draftOrder.value).forEach(function (picks) {
    picks.forEach(function (pick) {
      if (pick.pick.pick === currentPick.value) {
        pick.player = eligiblePlayer

        pick.onTheClock = false
        pick.nextUp = false
      }
    })
  })

  advancePick()
}

const getCompletedPicks = (picks) => {
  let completed = 0

  picks.forEach((pick) => {
    if (pick.player) {
      completed += 1
    }
  })

  return completed
}

const advancePick = () => {
  currentPick.value += 1
}

const updateSimSpeed = (speed) => {
  simSpeed.value = speed
}

const isPickUserControlled = (pick) => {
  return selectingFor.value.indexOf(pick.team.shortName) !== -1
}

onMounted(() => {
  let roundsToMock = props.settings.rounds
  let draftOrderByRound = {}

  for (let index = 1; index <= roundsToMock; index++) {
    draftOrderByRound[index] = []
  }

  teams.forEach((team) => {
    team.picks[2026].forEach((pick) => {
      if (pick.round > roundsToMock) {
        return;
      }

      draftOrderByRound[pick.round].push({
        pick,
        team: {
          name: team.name,
          shortName: team.shortName,
          image: team.image,
        },
        player: null,
        onTheClock: false,
        nextUp: false,
      })
    })
  })

  for (let [, value] of Object.entries(draftOrderByRound)) {
    value.sort((a, b) => {
      const pickA = a.pick.pick
      const pickB = b.pick.pick

      if (pickA < pickB) {
        return -1
      }
      if (pickA > pickB) {
        return 1
      }

      return 0
    })
  }

  draftOrder.value = draftOrderByRound

  props.settings.selectedTeams.forEach((team) => {
    selectingFor.value.push(team.shortName)
  })

  loadPlayers()

  tradingWith.value = teams[0]
  tradingFor.value = teams[1]
})

const updateTradingWith = (team) => {
  tradingWith.value = team
}

const updateTradingWithPicks = (pick) => {
  let index = tradingWithPicks.value.indexOf(pick)

  if (index === -1) {
    tradingWithPicks.value.push(pick)
  } else {
    tradingWithPicks.value.splice(index, 1)
  }
}

const updateTradingForPicks = (pick) => {
  let index = tradingForPicks.value.indexOf(pick)

  if (index === -1) {
    tradingForPicks.value.push(pick)
  } else {
    tradingForPicks.value.splice(index, 1)
  }
}

const updateTradingFor = (team) => {
  tradingFor.value = team
}

watch(
  () => currentPick.value,
  () => {
    if (! draftOrder.value) {
      return
    }

    if (! isStarted.value) {
      return
    }

    for (let [, value] of Object.entries(draftOrder.value)) {
      value.forEach((pick) => {
        if (pick.pick.pick === currentPick.value) {
          pick.onTheClock = true
        }

        if (pick.pick.pick === currentPick.value + 1) {
          pick.nextUp = true
        }
      })
    }
  },
  { immediate: true },
)

watch(
  () => filterPositions.value,
  () => {
    currentPage.value = 1
  },
  { immediate: true, deep: true }
)

watch(
  () => filterSchools.value,
  () => {
    currentPage.value = 1
  },
  { immediate: true, deep: true }
)

watch(
  () => filterSearch.value,
  () => {
    currentPage.value = 1
  },
  { immediate: true }
)

watch(
  () => tradingWith.value,
  () => {
    tradingWithPicks.value = []
  },
  { immediate: true }
)

watch(
  () => tradingFor.value,
  () => {
    tradingForPicks.value = []
  },
  { immediate: true }
)
</script>

<template>
  <div class="flex flex-col gap-8">
    <base-return @click="returnToSettings"> Return to Settings </base-return>

    <div class="w-full grid grid-cols-10 gap-4 rounded-md">
      <!-- Draft Order -->
      <div class="col-span-3 h-[850px] flex flex-col gap-4">
        <div
          class="bg-dark rounded-md p-4 text-white h-[850px] overflow-y-auto flex flex-col gap-4"
        >
          <option-wrapper label="Simulation Speed">
            <div class="flex items-center gap-2 justify-between">
              <base-button class="bg-blue-500 w-32" :class="{ '!bg-gray-400': simSpeed !== 0.25, '!bg-light': simSpeed === 0.25 }" @click="updateSimSpeed(0.25)">
                <Icon icon="material-symbols:fast-rewind-rounded" class="size-4" />
              </base-button>

              <base-button class="bg-blue-500 w-32" :class="{ '!bg-gray-400': simSpeed !== 0.5, '!bg-light': simSpeed === 0.5 }" @click="updateSimSpeed(0.5)">
                <Icon icon="material-symbols:fast-rewind-rounded" class="size-4" />
              </base-button>

              <base-button class="bg-blue-500 w-32" :class="{ '!bg-gray-400': simSpeed !== 1, '!bg-light': simSpeed === 1 }" @click="updateSimSpeed(1)">
                <Icon icon="material-symbols:play-arrow-rounded" class="size-4" />
              </base-button>

              <base-button class="bg-blue-500 w-32" :class="{ '!bg-gray-400': simSpeed !== 5, '!bg-light': simSpeed === 5 }" @click="updateSimSpeed(5)">
                <Icon icon="material-symbols:fast-rewind-rounded" class="size-4 rotate-180" />
              </base-button>

              <base-button class="bg-blue-500 w-32" :class="{ '!bg-gray-400': simSpeed !== 30, '!bg-light': simSpeed === 30 }" @click="updateSimSpeed(30)">
                <Icon icon="material-symbols:fast-rewind-rounded" class="size-4 rotate-180" />
              </base-button>
            </div>
          </option-wrapper>

          <span class="font-exclamation text-md text-white">Picks</span>

          <div v-if="draftOrder" class="flex flex-col gap-4">
            <base-accordion v-for="[round, picks] of Object.entries(draftOrder)" :key="round">
              <div class="flex gap-4 justify-between w-full">
                <span>Round {{ round }}</span>
                <span :class="{ '!text-green-600': getCompletedPicks(picks) === picks.length }" class="text-red-600">{{ getCompletedPicks(picks) }} / {{ picks.length }}</span>
              </div>

              <template #content>
                <pick
                  v-for="pick in picks"
                  :key="pick.pick"
                  :pick="pick"
                  :is-paused="isPaused"
                  :sim-speed="simSpeed"
                  :is-user-controlled="isPickUserControlled(pick)"
                  @pick-expired="draftPlayerAutomatically"
                  class="mb-2 last:mb-0"
                />
              </template>
            </base-accordion>
          </div>
        </div>

        <div class="bg-dark rounded-md p-4">
          <option-wrapper label="Controls">
            <div class="w-full flex items-center gap-2">
              <base-button class="bg-green-600 h-16 w-full" :disabled="isStarted" @click="startDraft">Start Draft</base-button>

              <base-button v-if="isStarted" class="bg-green-600 h-16 w-full" @click="pauseDraft">
                <span v-if="isPaused" class="flex items-center gap-1">
                  <Icon icon="carbon:play" class="size-4" />
                  Resume Draft
                </span>
                    <span v-else class="flex items-center gap-1">
                  <Icon icon="carbon:pause" class="size-4" />
                  Pause Draft
                </span>
              </base-button>
            </div>
          </option-wrapper>
        </div>
      </div>

      <!-- Players, Filters, Focus Player -->
      <div class="col-span-7 h-[850px]">
        <div class="grid grid-cols-3 gap-4 h-full">
          <!-- Players, Filters -->
          <div class="col-span-2 h-full overflow-y-auto flex flex-col gap-4">
            <!-- Filters -->
            <div class="bg-dark rounded-md p-4 sticky top-0 z-10 flex flex-col gap-2">
              <option-wrapper label="Filters">
                <div class="grid grid-cols-2 gap-4">
                  <base-input v-model="filterSearch" label="Player Name" placeholder="Search..." />

                  <div class="h-full flex flex-col-reverse">
                    <div class="flex flex-col items-center gap-4">
                      <position-selector
                        :selected-positions="filterPositions"
                        @toggle-position="filterPosition"
                      />

                      <school-selector
                        :selected-schools="filterSchools"
                        @toggle-school="filterSchool"
                      />
                    </div>

                  </div>
                </div>
              </option-wrapper>
            </div>

            <!-- Players -->
            <div class="h-full rounded-md">
              <div v-if="filteredPlayers.length > 0" class="h-full flex flex-col gap-4">
                <div>
                  <player
                    v-for="player in paginatedPlayers"
                    :player="player"
                    :is-picking="isPicking"
                    :key="player.player_id"
                    @read-more="selectFocusPlayer"
                    @draft="draftPlayer"
                  />
                </div>


                <div class="flex justify-end gap-1">
                  <span v-for="page in pageRange" :key="page" class="px-4 py-2 duration-300 cursor-pointer rounded-md text-white font-exclamation text-sm" :class="{ 'bg-dark hover:bg-light': currentPage !== page, 'bg-light hover:bg-lightest': currentPage === page}" @click="selectPage(page)">
                    {{ page }}
                  </span>
                </div>
              </div>

              <div v-else class="w-full h-full bg-slate-100 rounded-md flex items-center justify-center">
                <div class="font-exclamation">
                  <p><span class="font-bold">Oh No!</span> We couldn't find any Prospects matching your criteria!</p>
                  <p>Why don't you try <span class="font-bold">altering your search</span> and trying again?</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Trade Centre, Focus Player -->
          <div class="flex flex-col gap-4">
            <!-- Focus Player -->
            <!-- <focus-player-panel v-show="focusPlayer" :player="focusPlayer" /> -->

            <!-- Trade Centre -->
            <div class="bg-dark rounded-md p-4 text-white h-[850px]">
              <option-wrapper label="Trade Centre" class="h-full">
                <div class="flex flex-col gap-8 justify-between h-full">
                  <div class="flex flex-col gap-8">
                    <option-wrapper label="Trading For" v-if="tradingWith">
                      <team-selector :team="tradingWith" @select-team="updateTradingWith" />

                      <draft-class
                        v-for="[year, picks] in Object.entries(tradingWith.picks)"
                        :key="year"
                        :picks="picks"
                        :year="year"
                        :selected-picks="tradingWithPicks"
                        @select-pick="updateTradingWithPicks"
                      />
                    </option-wrapper>

                    <option-wrapper label="From" v-if="tradingFor">
                      <team-selector :team="tradingFor" @select-team="updateTradingFor" />

                      <draft-class
                        v-for="[year, picks] in Object.entries(tradingFor.picks)"
                        :key="year"
                        :picks="picks"
                        :year="year"
                        :selected-picks="tradingForPicks"
                        @select-pick="updateTradingForPicks"
                      />
                    </option-wrapper>
                  </div>

                  <div class="flex flex-col gap-8">
                    <trade-meter :trading-for="tradingForPicks" :trading-with="tradingWithPicks" />

                    <base-button class="bg-green-600 h-12 w-full" @click="proposeTrade">Trade</base-button>
                  </div>

                </div>

              </option-wrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
