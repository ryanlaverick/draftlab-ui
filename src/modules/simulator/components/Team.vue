<script setup>
import { computed } from 'vue'

const props = defineProps({
  team: {
    type: Object,
    required: true,
  },
  selected: {
    type: Boolean,
    required: true,
  },
})

const emits = defineEmits(['clickTeam'])

const backgroundColors = {
  'Arizona Cardinals': 'before:bg-cardinals',
  'Atlanta Falcons': 'before:bg-falcons',
  'Baltimore Ravens': 'before:bg-ravens',
  'Buffalo Bills': 'before:bg-bills',
  'Carolina Panthers': 'before:bg-panthers',
  'Chicago Bears': 'before:bg-bears',
  'Cincinnati Bengals': 'before:bg-bengals',
  'Cleveland Browns': 'before:bg-browns',
  'Dallas Cowboys': 'before:bg-cowboys',
  'Denver Broncos': 'before:bg-broncos',
  'Detroit Lions': 'before:bg-lions',
  'Green Bay Packers': 'before:bg-packers',
  'Houston Texans': 'before:bg-texans',
  'Indianapolis Colts': 'before:bg-colts',
  'Jacksonville Jaguars': 'before:bg-jaguars',
  'Kansas City Chiefs': 'before:bg-chiefs',
  'Las Vegas Raiders': 'before:bg-raiders',
  'Los Angeles Chargers': 'before:bg-chargers',
  'Los Angeles Rams': 'before:bg-rams',
  'Miami Dolphins': 'before:bg-dolphins',
  'Minnesota Vikings': 'before:bg-vikings',
  'New England Patriots': 'before:bg-patriots',
  'New Orleans Saints': 'before:bg-saints',
  'New York Giants': 'before:bg-giants',
  'New York Jets': 'before:bg-jets',
  'Philadelphia Eagles': 'before:bg-eagles',
  'Pittsburgh Steelers': 'before:bg-steelers',
  'San Francisco 49ers': 'before:bg-49ers',
  'Seattle Seahawks': 'before:bg-seahawks',
  'Tampa Bay Buccaneers': 'before:bg-buccaneers',
  'Tennessee Titans': 'before:bg-titans',
  'Washington Commanders': 'before:bg-commanders',
}
</script>

<template>
  <div
    @click="emits('clickTeam', team)"
    class="relative overflow-hidden border-2 border-gray-200 rounded-md p-4 flex items-center gap-4 cursor-pointer transition-colors duration-300 before:absolute before:inset-0 before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:[clip-path:polygon(0_0,75%_0,72%_100%,0_100%)]"
    :class="[
      backgroundColors[team.name],
      { 'border-light before:scale-x-100': selected, 'hover:border-light': !selected },
    ]"
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
        :class="{ 'grayscale-100': !selected }"
      />
    </div>
  </div>
</template>

<style scoped></style>
