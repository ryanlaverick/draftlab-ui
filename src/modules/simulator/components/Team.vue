<script setup>
defineProps({
  team: {
    type: Object,
    required: true
  },
  selected: {
    type: Boolean,
    required: true
  }
})

const emits = defineEmits(['clickTeam'])
</script>

<template>
  <div
    @click="emits('clickTeam', team)"
    class="relative overflow-hidden
         border-2 border-gray-200 rounded-md p-4
         flex items-center gap-4 cursor-pointer
         transition-colors duration-300
         before:absolute before:inset-0
         before:bg-light
         before:origin-left
         before:scale-x-0
         before:transition-transform before:duration-300
         before:[clip-path:polygon(0_0,75%_0,72%_100%,0_100%)]"
    :class="{
    'border-light before:scale-x-100': selected,
    'hover:border-light': !selected
  }"
  >
    <!-- Content above the bar -->
    <div class="relative z-10 w-full flex items-center justify-between gap-4">
      <p
        class="uppercase font-semibold transition-colors duration-300"
        :class="{ 'text-white': selected }"
      >
        {{ team.name }}
      </p>

      <img
        :src="team.image"
        :alt="'Team Logo for ' + team.name"
        class="size-10"
      />
    </div>
  </div>
</template>

<style scoped></style>
