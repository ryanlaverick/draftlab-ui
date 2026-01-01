<script setup>
import { computed } from 'vue'
import TeamLogo from '@/modules/teams/components/TeamLogo.vue'

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
  'Arizona Cardinals': 'border-cardinals',
  'Atlanta Falcons': 'border-falcons',
  'Baltimore Ravens': 'border-ravens',
  'Buffalo Bills': 'border-bills',
  'Carolina Panthers': 'border-panthers',
  'Chicago Bears': 'border-bears',
  'Cincinnati Bengals': 'border-bengals',
  'Cleveland Browns': 'border-browns',
  'Dallas Cowboys': 'border-cowboys',
  'Denver Broncos': 'border-broncos',
  'Detroit Lions': 'border-lions',
  'Green Bay Packers': 'border-packers',
  'Houston Texans': 'border-texans',
  'Indianapolis Colts': 'border-colts',
  'Jacksonville Jaguars': 'border-jaguars',
  'Kansas City Chiefs': 'border-chiefs',
  'Las Vegas Raiders': 'border-raiders',
  'Los Angeles Chargers': 'border-chargers',
  'Los Angeles Rams': 'border-rams',
  'Miami Dolphins': 'border-dolphins',
  'Minnesota Vikings': 'border-vikings',
  'New England Patriots': 'border-patriots',
  'New Orleans Saints': 'border-saints',
  'New York Giants': 'border-giants',
  'New York Jets': 'border-jets',
  'Philadelphia Eagles': 'border-eagles',
  'Pittsburgh Steelers': 'border-steelers',
  'San Francisco 49ers': 'border-49ers',
  'Seattle Seahawks': 'border-seahawks',
  'Tampa Bay Buccaneers': 'border-buccaneers',
  'Tennessee Titans': 'border-titans',
  'Washington Commanders': 'border-commanders',
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
    class="relative overflow-hidden border-3 rounded-md p-4 flex items-center gap-4 cursor-pointer transition-colors duration-300 before:absolute before:inset-0 before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:[clip-path:polygon(0_0,75%_0,72%_100%,0_100%)]"
    :class="computedClasses"
  >
    <!-- Content above the bar -->
    <div class="relative z-10 w-full flex items-center justify-between gap-4">
      <div>
        <span class="text-lg font-bold text-sm" :class="{ 'text-white': selected }">Pick {{ team.picks[2026][0].pick }}</span>
        <p
          class="uppercase font-semibold transition-colors duration-300 text-xs"
          :class="{ 'text-white': selected }"
        >
          {{ team.name }}
        </p>
      </div>


      <team-logo :team="team" :disabled="!selected" class="size-10" />
    </div>
  </div>
</template>

<style scoped></style>
