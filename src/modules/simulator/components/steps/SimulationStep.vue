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
const filterSearch = ref('')
const focusPlayer = ref({})
const currentPage = ref(1)
const selectingFor = ref([])
const pageSize = 10
const simSpeed = ref(1)

const returnToSettings = () => {
  emits('returnToSettings')
}

const selectPage = (page) => {
  currentPage.value = page
}

const filteredPlayers = computed(() => {
  if (filterPositions.value.length === 0) {
    if (filterSearch.value.length === 0) {
      return players.value.filter((player) => !player.is_drafted)
    }

    return players.value
      .filter((player) => !player.is_drafted)
      .filter((player) =>
        player.player.toLowerCase().includes(filterSearch.value.toString().toLowerCase()),
      )
  }

  if (filterSearch.value.length > 0) {
    return players.value
      .filter((player) => !player.is_drafted)
      .filter((player) => filterPositions.value.indexOf(player.position) !== -1)
      .filter((player) =>
        player.player.toLowerCase().includes(filterSearch.value.toString().toLowerCase()),
      )
  }

  return players.value
    .filter((player) => !player.is_drafted)
    .filter((player) => filterPositions.value.indexOf(player.position) !== -1)
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
})

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
                <span>x0.25</span>
              </base-button>

              <base-button class="bg-blue-500 w-32" :class="{ '!bg-gray-400': simSpeed !== 0.5, '!bg-light': simSpeed === 0.5 }" @click="updateSimSpeed(0.5)">
                <span>x0.5</span>
              </base-button>

              <base-button class="bg-blue-500 w-32" :class="{ '!bg-gray-400': simSpeed !== 1, '!bg-light': simSpeed === 1 }" @click="updateSimSpeed(1)">
                <span>x1</span>
              </base-button>

              <base-button class="bg-blue-500 w-32" :class="{ '!bg-gray-400': simSpeed !== 2, '!bg-light': simSpeed === 2 }" @click="updateSimSpeed(2)">
                <span>x2</span>
              </base-button>

              <base-button class="bg-blue-500 w-32" :class="{ '!bg-gray-400': simSpeed !== 5, '!bg-light': simSpeed === 5 }" @click="updateSimSpeed(5)">
                <span>x5</span>
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

              <base-button v-if="isStarted" class="bg-green-600 h-16 w-full">Trade Centre</base-button>
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
                    <position-selector
                      :selected-positions="filterPositions"
                      @toggle-position="filterPosition"
                    />
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
