<script setup>
import TeamLogo from '@/modules/teams/components/TeamLogo.vue'
import { computed } from 'vue'

const props = defineProps({
  pick: {
    type: Object,
    required: true
  }
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
</script>

<template>
  <div class="w-full border-y-base bg-darkest divide-x-2 divide-light flex items-center rounded-md">
    <div class="p-2 ">
      <team-logo :team="pick.team" class="size-8" />
    </div>

    <div class="p-2">
      <div class="flex flex-col gap-1">
        <span class="font-bold text-sm">Pick {{ pick.pick.pick }}</span>
        <span class="text-xs opacity-75">{{ getStatus }}</span>
      </div>

    </div>
  </div>
</template>

<style scoped></style>
