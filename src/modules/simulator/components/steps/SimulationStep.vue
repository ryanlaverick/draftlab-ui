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

const emits = defineEmits(['returnToSettings'])

const teams = useTeams
const { getPlayers: players, loadPlayers } = usePlayers()

const currentPick = ref(0)
const draftOrder = ref()
const filterPositions = ref([])
const filterSearch = ref('')
const focusPlayer = ref({})

const returnToSettings = () => {
  emits('returnToSettings')
}

const filteredPlayers = computed(() => {
  if (filterPositions.value.length === 0) {
    if (filterSearch.value.length === 0) {
      return players.value
    }

    return players.value.filter((player) =>
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

  return players.value.filter((player) => filterPositions.value.indexOf(player.position) !== -1)
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
  console.log('fdjfgjd')
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
            <div>
              <player
                v-for="player in filteredPlayers"
                :player="player"
                :is-picking="true"
                :key="player.player_id"
                @read-more="selectFocusPlayer"
              />
            </div>
          </div>

          <!-- Focus Player -->
          <!-- <focus-player-panel v-show="focusPlayer" :player="focusPlayer" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
