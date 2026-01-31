<script setup>
import { computed } from 'vue'
import * as url from 'node:url'

const props = defineProps({
  player: {
    type: Object,
    required: true
  }
})

const teamCoverImage = computed(() => {
  return `background-image url(${props.player?.team?.image})`
})
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <div class="shadow-lg">
      <div class="relative w-full overflow-hidden">

        <div v-if="props.player" class="absolute inset-0 z-10 bg-cover bg-center clip-team"
             :style="teamCoverImage">
        </div>

        <img
          src="/assets/players/images/Danny-Scudero-WR-San-Jose-State.png"
          class="absolute bottom-0 left-1/2 z-20 h-full w-full -translate-x-1/2 object-contain pointer-events-none"
          alt="Player"
        />

      </div>

      <div class="grid grid-cols-2 border border-dark/70 divide-x divide-dark/70">
        <div class="p-2 flex flex-col">
          <span class="font-semibold text-sm">Position</span>
          <span class="text-xs">{{ player.position }}</span>
        </div>

        <div class="p-2 flex flex-col">
          <span class="font-semibold text-sm">Position</span>
          <span class="text-xs">{{ player.position }}</span>
        </div>
      </div>

      {{ player }}
    </div>

  </div>
</template>

<style scoped></style>
