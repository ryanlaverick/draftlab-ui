<script setup>
import SchoolLogo from '@/components/SchoolLogo.vue'
import useSchools from '@/composables/useSchools.js'
import BaseButton from '@/components/BaseButton.vue'
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

const schools = useSchools

const props = defineProps({
  player: {
    type: Object,
    required: true
  },
  isPicking: {
    type: Boolean,
    required: true
  }
})

const getSchool = computed(() => {
  return schools
    .find((school) => school.shortName === props.player?.team_name)
})
</script>

<template>
  <div class="w-full border-y border-y-slate-200 bg-slate-50 hover:bg-slate-200 duration-300 p-4 flex items-center justify-between gap-8 snap-start cursor-pointer">
    <div class="flex items-center gap-4">
      <school-logo v-if="getSchool" :school="getSchool" class="size-10" />
      <Icon v-else icon="mdi:image-remove-outline" class="size-10" />

      <div class="flex flex-col text-md text-dark/70">
        <span class="font-bold">{{ player.player }}</span>

        <div class="flex items-center gap-2 text-sm">
          <p class="font-semibold">{{ player.position }}</p>
          <p class="text-sm font-normal">{{ getSchool?.name ?? 'Undefined' }}</p>
        </div>
      </div>

    </div>

    <div>
      <base-button v-if="isPicking" class="bg-green-600 text-white">
        Draft
      </base-button>
    </div>
  </div>
</template>

<style scoped></style>
