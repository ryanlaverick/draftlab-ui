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

const emits = defineEmits(['returnToSettings'])

const teams = useTeams
const { getPlayers: players, loadPlayers } = usePlayers()

const currentPick = ref(0)
const draftOrder = ref()
const filterPositions = ref([])
const filterSearch = ref('')
const focusPlayer = ref({})
const currentPage = ref(1)
const pageSize = 10

const returnToSettings = () => {
  emits('returnToSettings')
}

const filteredPlayers = computed(() => {
  if (filterPositions.value.length === 0) {
    if (filterSearch.value.length === 0) {
      return players.value
    }

    return players.value
      .filter((player) =>
        player.player.toLowerCase().includes(filterSearch.value.toString().toLowerCase()),
      )
  }

  if (filterSearch.value.length > 0) {
    return players.value
      .filter((player) => filterPositions.value.indexOf(player.position) !== -1)
      .filter((player) =>
        player.player.toLowerCase().includes(filterSearch.value.toString().toLowerCase()),
      )
  }

  return players.value
    .filter((player) => filterPositions.value.indexOf(player.position) !== -1)
})

const paginatedPlayers = computed(() => filteredPlayers.value.slice(((currentPage.value - 1) * pageSize), pageSize))

const pageRange = computed(() => {
  let pages = []
  let maxPage = (filteredPlayers.value.length ?? 0 / pageSize) + 1

  let shouldHavePreviousPage = (currentPage.value - 1) > 1
  if (shouldHavePreviousPage) {
    pages.push(currentPage.value - 1)
  }

  pages.push(currentPage.value)
  pages.push(currentPage.value + 1)
  pages.push(currentPage.value + 2)
  pages.push(maxPage)

  return pages
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

onMounted(() => {
  let draftOrderByRound = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
  }

  teams.forEach((team) => {
    team.picks[2026].forEach((pick) => {
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
  currentPick.value = 1

  loadPlayers()
})

watch(
  () => currentPick.value,
  () => {
    if (!draftOrder.value) {
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
      <div
        class="col-span-3 bg-dark rounded-md p-4 text-white h-[800px] overflow-y-auto flex flex-col gap-2"
      >
        <span class="font-exclamation text-md text-white">Picks</span>

        <div v-if="draftOrder" class="flex flex-col gap-4">
          <base-accordion v-for="[round, picks] of Object.entries(draftOrder)" :key="round">
            Round {{ round }}

            <template #content>
              <pick v-for="pick in picks" :key="pick.pick" :pick="pick" class="mb-2 last:mb-0" />
            </template>
          </base-accordion>
        </div>
      </div>

      <!-- Players, Filters, Focus Player -->
      <div class="col-span-7 h-[800px]">
        <div class="grid grid-cols-3 gap-4 h-full">
          <!-- Players, Filters -->
          <div class="col-span-2 h-full overflow-y-auto flex flex-col gap-4">
            <!-- Filters -->
            <div class="bg-dark rounded-md p-4 sticky top-0 z-10 flex flex-col gap-2">
              <span class="font-exclamation text-md text-white">Filters</span>

              <div class="grid grid-cols-2 gap-4">
                <base-input v-model="filterSearch" label="Player Name" placeholder="Search..." />

                <div class="h-full flex flex-col-reverse">
                  <position-selector
                    :selected-positions="filterPositions"
                    @toggle-position="filterPosition"
                  />
                </div>
              </div>
            </div>

            <!-- Players -->
            <div class="h-full rounded-md flex flex-col gap-4">
              <div class="h-full">
                <player
                  v-for="player in paginatedPlayers"
                  :player="player"
                  :is-picking="true"
                  :key="player.player_id"
                  @read-more="selectFocusPlayer"
                />
              </div>

              <div class="flex gap-2">
                <span v-for="i in pageRange" :key="i">
                  {{ i }}
                </span>
              </div>

              <div v-if="filteredPlayers.length === 0" class="w-full h-full bg-slate-100 rounded-md flex items-center justify-center">
                <div class="font-exclamation">
                  <p><span class="font-bold">Oh No!</span> We couldn't find any Prospects matching your criteria!</p>
                  <p>Why don't you try <span class="font-bold">altering your search</span> and trying again?</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Trade Centre, Focus Player -->
          <div class="flex flex-col gap-4">
            <base-button class="bg-green-600 h-16">Trade</base-button>

            <!-- Focus Player -->
            <!-- <focus-player-panel v-show="focusPlayer" :player="focusPlayer" /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
