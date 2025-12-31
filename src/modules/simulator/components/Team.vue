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

const borderColors = {
  'Arizona Cardinals': 'border-cardinals-alt',
  'Atlanta Falcons': 'border-falcons-alt',
  'Baltimore Ravens': 'border-ravens-alt',
  'Buffalo Bills': 'border-bills-alt',
  'Carolina Panthers': 'border-panthers-alt',
  'Chicago Bears': 'border-bears-alt',
  'Cincinnati Bengals': 'border-bengals-alt',
  'Cleveland Browns': 'border-browns-alt',
  'Dallas Cowboys': 'border-cowboys-alt',
  'Denver Broncos': 'border-broncos-alt',
  'Detroit Lions': 'border-lions-alt',
  'Green Bay Packers': 'border-packers-alt',
  'Houston Texans': 'border-texans-alt',
  'Indianapolis Colts': 'border-colts-alt',
  'Jacksonville Jaguars': 'border-jaguars-alt',
  'Kansas City Chiefs': 'border-chiefs-alt',
  'Las Vegas Raiders': 'border-raiders-alt',
  'Los Angeles Chargers': 'border-chargers-alt',
  'Los Angeles Rams': 'border-rams-alt',
  'Miami Dolphins': 'border-dolphins-alt',
  'Minnesota Vikings': 'border-vikings-alt',
  'New England Patriots': 'border-patriots-alt',
  'New Orleans Saints': 'border-saints-alt',
  'New York Giants': 'border-giants-alt',
  'New York Jets': 'border-jets-alt',
  'Philadelphia Eagles': 'border-eagles-alt',
  'Pittsburgh Steelers': 'border-steelers-alt',
  'San Francisco 49ers': 'border-49ers-alt',
  'Seattle Seahawks': 'border-seahawks-alt',
  'Tampa Bay Buccaneers': 'border-buccaneers-alt',
  'Tennessee Titans': 'border-titans-alt',
  'Washington Commanders': 'border-commanders-alt',
}

const computedClasses = computed(() => {
  return [
    backgroundColors[props.team.name],
    props.selected ? borderColors[props.team.name] : '',
    {
      'before:scale-x-100': props.selected,
      'border-gray-200 hover:border-light': !props.selected
    }
  ]
})
</script>

<template>
  <div
    @click="emits('clickTeam', team)"
    class="relative overflow-hidden border-2  rounded-md p-4 flex items-center gap-4 cursor-pointer transition-colors duration-300 before:absolute before:inset-0 before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:[clip-path:polygon(0_0,75%_0,72%_100%,0_100%)]"
    :class="computedClasses"
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
