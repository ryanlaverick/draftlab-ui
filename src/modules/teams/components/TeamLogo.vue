<script setup>
defineProps({
  team: {
    type: Object,
    required: true
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<template>
  <img
    :src="team.image"
    :alt="'Team Logo for ' + team.name"
    class="size-10"
    :class="{ 'grayscale-100': disabled }"
  />
</template>

<style scoped></style>
