<script setup>
import TeamLogo from '@/modules/teams/components/TeamLogo.vue'
import { Icon } from '@iconify/vue'
import { computed } from 'vue'

const props = defineProps({
  pick: {
    type: Object,
    required: true,
  },
})

const getStatus = computed(() => {
  if (props.pick.onTheClock === true) {
    return 'On the clock'
  }

  if (props.pick.nextUp === true) {
    return 'Next up'
  }

  if (props.pick.player === null) {
    return 'Upcoming'
  }

  return props.pick.player?.name
})

const getIcon = computed(() => {
  if (props.pick.onTheClock) {
    return 'mdi:timer-sand'
  }

  if (props.pick.nextUp) {
    return 'zondicons:exclamation-outline'
  }

  if (props.pick.player) {
    return 'mdi:check-circle-outline'
  }

  return 'mdi:timer-sand'
})
</script>

<template>
  <div class="w-full bg-darkest flex items-center rounded-md border-2 border-light">
    <div class="p-2 bg-light">
      <team-logo :team="pick.team" class="size-8" />
    </div>

    <div class="p-2 w-full flex items-center justify-between gap-4">
      <span class="text-sm font-semibold">Pick {{ pick.pick.pick }}</span>

      <div
        class="flex items-center gap-1"
        :class="{
          'text-orange-300': pick.onTheClock,
          'text-blue-300': pick.nextUp,
          'text-green-300': props.pick.player,
        }"
      >
        <Icon :icon="getIcon" class="size-4" />
        <span class="text-sm font-base opacity-75">{{ getStatus }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
