<script setup>
import TeamLogo from '@/modules/teams/components/TeamLogo.vue'
import { Icon } from '@iconify/vue'
import { computed, ref, watch } from 'vue'
import dayjs from 'dayjs'

const timer = ref(120)
const timerStarted = ref(false)

const emits = defineEmits(['pickExpired'])

const props = defineProps({
  pick: {
    type: Object,
    required: true,
  },
  isPaused: {
    type: Boolean,
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

  return 'Picked'
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

const startTimer = () => {
  timerStarted.value = true

  setTimeout(() => {
    if (timerStarted.value) {
      if (timer.value === 0) {
        emits('pickExpired', props.pick)

        timerStarted.value = false
        timer.value = 120

        return
      }

      if (! props.isPaused) {
        timer.value--
      }

      startTimer()
    }
  }, 1000)
}

const resetTimer = () => {
  timerStarted.value = false
  timer.value = 120
}

const formatTimer = computed(() => {
  const duration = dayjs.duration(timer.value, 'seconds')
  const minutes = Math.floor(duration.asMinutes())
  const secs = duration.seconds().toString().padStart(2, '0')
  return `${minutes}:${secs}`
})

watch(
  () => props.pick,
  () => {
    if (props.pick.onTheClock) {
      startTimer()
    } else {
      resetTimer()
    }
  },
  { deep: true },
)
</script>

<template>
  <div class="w-full bg-darkest flex items-center rounded-md border-2 border-light">
    <div class="p-2 bg-light">
      <team-logo :team="pick.team" class="size-8" />
    </div>

    <div class="p-2 w-full flex items-center justify-between gap-4">
      <span class="flex items-center gap-2">
        <span class="text-sm font-semibold">#{{ pick.pick.pick }}</span>

        <Transition
          enter-active-class="transition transform duration-300 ease-out"
          enter-from-class="-translate-x-2 opacity-0"
          enter-to-class="-translate-x-0 opacity-100"
          leave-active-class="transition transform duration-300 ease-in"
          leave-from-class="-translate-x-0 opacity-100"
          leave-to-class="-translate-x-2 opacity-0"
        >
          <span v-if="pick.player" class="text-sm"
            >{{ pick.player.player }}, {{ pick.player.position }} -
            {{ pick.player.team_name }}</span
          >
        </Transition>
      </span>

      <div
        class="flex gap-1"
        :class="{
          'text-orange-300': pick.onTheClock,
          'text-blue-300': pick.nextUp,
          'text-green-300': pick.player,
        }"
      >
        <Icon :icon="getIcon" class="size-4" />
        <span class="text-sm font-base opacity-75">{{ getStatus }} <span v-if="timerStarted"> - {{ formatTimer }} remaining</span></span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
