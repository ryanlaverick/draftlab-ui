<script setup>
import BaseReturn from '@/components/BaseReturn.vue'
import useTeams from '@/modules/teams/useTeams.js'
import { onMounted, ref, watch } from 'vue'
import BaseAccordion from '@/components/BaseAccordion.vue'
import Pick from '@/modules/simulator/components/Pick.vue'

const emits = defineEmits(['returnToSettings'])

const teams = useTeams

const draftOrder = ref()

const returnToSettings = () => {
  emits('returnToSettings')
}

const currentPick = ref(0)

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
      <div class="bg-dark rounded-md p-4 text-white">
        <div class="h-[750px] overflow-y-auto flex flex-col">
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
      </div>

      <!-- Team Picks -->
    </div>
  </div>
</template>

<style scoped></style>
