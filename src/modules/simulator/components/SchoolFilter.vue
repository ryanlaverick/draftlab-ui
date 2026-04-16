<script setup>
import { computed } from 'vue'
import SchoolLogo from '@/components/SchoolLogo.vue'

const props = defineProps({
  school: {
    type: Object,
    required: true,
  },
  selectedSchools: {
    type: Array,
    required: true
  },
})

const emits = defineEmits(['toggleSchool'])

const isSelected = computed(() => {
  return props.selectedSchools.indexOf(props.school.shortName) !== -1
})

const selectSchool = () => {
  emits('toggleSchool', props.school.shortName)
}
</script>

<template>
  <div
    @click="selectSchool()"
    class="p-2 text-white hover:bg-light rounded-md duration-300 cursor-pointer flex items-center gap-2"
    :class="{
      'bg-light': isSelected,
    }"
  >
    <school-logo :school="school" class="size-4" />
    <span class="text-sm">{{ props.school.name }}</span>
  </div>
</template>
