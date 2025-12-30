<script setup>
defineProps({
  team: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="border border-darkest rounded-md p-4 flex items-center gap-4">
    <div class="w-full flex items-center justify-between gap-4">
      <p class="uppercase font-semibold">{{ team.name }}</p>

      <img :src="team.image" :alt="'Team Logo for ' + team.name" class="size-10" />
    </div>
  </div>
</template>

<style scoped></style>
