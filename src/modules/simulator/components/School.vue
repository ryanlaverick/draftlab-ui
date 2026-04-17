<script setup>
import { computed } from 'vue'

const props = defineProps({
  school: {
    type: Object,
    required: true,
  },
  selected: {
    type: Boolean,
    required: true,
  },
})

const emits = defineEmits(['clickSchool'])

const schoolColors = {
  // ACC
  'Boston College': '#8C2232',
  'California': '#003262',
  'Clemson': '#F56600',
  'Duke': '#003087',
  'Florida State': '#782F40',
  'Georgia Tech': '#B3A369',
  'Louisville': '#AD0000',
  'Miami': '#F47321',
  'NC State': '#CC0000',
  'North Carolina': '#7BAFD4',
  'Pittsburgh': '#003594',
  'SMU': '#CC0035',
  'Stanford': '#8C1515',
  'Syracuse': '#F76900',
  'Virginia': '#232D4B',
  'Virginia Tech': '#660000',
  'Wake Forest': '#9E7E38',

  // American
  'Army': '#000000',
  'Charlotte': '#005035',
  'East Carolina': '#592A8A',
  'Florida Atlantic': '#003366',
  'Memphis': '#003087',
  'Navy': '#00205B',
  'North Texas': '#00853E',
  'Rice': '#002469',
  'South Florida': '#006747',
  'Temple': '#9D2235',
  'Tulane': '#006747',
  'Tulsa': '#002D62',
  'UAB': '#1E6B52',
  'UTSA': '#0C2340',

  // Big 12
  'Arizona': '#CC0033',
  'Arizona State': '#8C1D40',
  'Baylor': '#154734',
  'BYU': '#002E5D',
  'Cincinnati': '#E00122',
  'Colorado': '#CFB87C',
  'Houston': '#C8102E',
  'Iowa State': '#C8102E',
  'Kansas': '#0051BA',
  'Kansas State': '#512888',
  'Oklahoma State': '#FF7300',
  'TCU': '#4D1979',
  'Texas Tech': '#CC0000',
  'UCF': '#BA9B37',
  'Utah': '#CC0000',
  'West Virginia': '#002855',

  // Big Ten
  'Indiana': '#990000',
  'Ohio State': '#BB0000',
  'Oregon': '#154733',
  'USC': '#990000',
  'Michigan': '#00274C',
  'Iowa': '#FFCD00',
  'Washington': '#4B2E83',
  'Illinois': '#E84A27',
  'Minnesota': '#7A0019',
  'Nebraska': '#D00000',
  'Northwestern': '#4E2A84',
  'UCLA': '#2774AE',
  'Penn State': '#041E42',
  'Rutgers': '#CC0033',
  'Wisconsin': '#C5050C',
  'Michigan State': '#18453B',
  'Maryland': '#E03A3E',
  'Purdue': '#CEB888',
}

const schoolColor = computed(() => {
  return schoolColors[props.school.name] || '#6B7280'
})

const overlayStyle = computed(() => {
  return {
    backgroundColor: schoolColor.value,
  }
})
</script>

<template>
  <div
    @click="emits('clickSchool', school)"
    class="relative overflow-hidden rounded-md py-4 px-2 cursor-pointer"
    :class="{ 'opacity-50': !selected }"
  >
    <!-- Tilted colour overlay — always visible -->
    <div
      class="absolute inset-0 [clip-path:polygon(0_0,90%_0,85%_100%,0_100%)]"
      :style="overlayStyle"
    ></div>

    <!-- Logo -->
    <img
      :src="school.image"
      :alt="school.name"
      class="relative z-10 size-10 object-contain"
    />
  </div>
</template>

<style scoped></style>
