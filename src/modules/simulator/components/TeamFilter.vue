<script setup>
import TeamLogo from '@/modules/teams/components/TeamLogo.vue'

const props = defineProps({
  team: {
    type: Object,
    required: true
  },
})

const emits = defineEmits(['selectTeam'])

const selectTeam = () => {
  emits('selectTeam', props.team)
}
</script>

<template>
  <div class="p-2 text-white hover:bg-light duration-300 cursor-pointer flex items-center gap-2" @click="selectTeam">
    <team-logo :team="team" class="size-4" />
    <span class="text-sm">{{ team.name }}</span>
  </div>
</template>

<style scoped></style>
