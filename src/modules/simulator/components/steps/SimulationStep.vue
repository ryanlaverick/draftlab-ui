<script setup>
import BaseReturn from '@/components/BaseReturn.vue'
import { computed, onMounted, ref, watch } from 'vue'
import BaseAccordion from '@/components/BaseAccordion.vue'
import Pick from '@/modules/simulator/components/Pick.vue'
import useTeams from '@/modules/teams/useTeams.js'
import usePlayers from '@/modules/simulator/usePlayers.js'
import usePositions from '@/composables/usePositions.js'
import PositionSelector from '@/modules/simulator/components/PositionSelector.vue'
import Player from '@/modules/simulator/components/Player.vue'

const emits = defineEmits(['returnToSettings'])

const teams = useTeams
const { getPlayers: players, loadPlayers } = usePlayers()
const { positions } = usePositions()

const currentPick = ref(0)
const draftOrder = ref()
const filterPositions = ref([])

const returnToSettings = () => {
  emits('returnToSettings')
}

const filteredPlayersByPosition = computed(() => {
  if (filterPositions.value.length === 0) {
    return players.value
  }

  return players.value
    .filter((player) => filterPositions.value.indexOf(player.position) !== -1)
})

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
        nextUp: false
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
    if (! draftOrder.value) {
      return
    }

    for (let [, value] of Object.entries(draftOrder.value)) {
      value.forEach((pick) => {
        if (pick.pick.pick === currentPick.value) {
          pick.onTheClock = true
        }

        if (pick.pick.pick === (currentPick.value + 1)) {
          pick.nextUp = true
        }
      })
    }
  },
  { immediate: true }
)
</script>

<template>
  <div class="flex flex-col gap-8">
    <base-return @click="returnToSettings"> Return to Settings </base-return>

    <div class="w-full grid grid-cols-3 gap-4 rounded-md">
      <!-- Draft Order -->
      <div class="bg-dark rounded-md p-4 text-white h-[800px] overflow-y-auto flex flex-col">
        <div v-if="draftOrder">
          <base-accordion
            v-for="[round, picks] of Object.entries(draftOrder)"
            :key="round"
            class="p-2"
          >
            Round {{ round }}

            <template #content>
              <pick v-for="pick in picks" :key="pick.pick" :pick="pick" class="mb-4 last:mb-0" />
            </template>
          </base-accordion>
        </div>
      </div>

      <!-- Team Picks -->
      <div class="col-span-2 h-[800px] ">
        <div class="grid grid-cols-3 gap-4 h-full">
          <div class="col-span-2 h-full overflow-y-auto snap-mandatory snap-y">
            <player v-for="player in filteredPlayersByPosition" :player="player" :is-picking="true" :key="player.player_id" />
          </div>

          <div class="rounded-md bg-dark p-4">
            <!-- <position-selector :selected-positions="[]" /> -->
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped></style>
