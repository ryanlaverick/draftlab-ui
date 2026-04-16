<script setup>
import useSchools from '@/composables/useSchools.js'
import SchoolFilter from '@/modules/simulator/components/SchoolFilter.vue'
import BaseDropdown from '@/components/BaseDropdown.vue'
import { Icon } from '@iconify/vue'

const schools = useSchools

defineProps({
  selectedSchools: {
    type: Array,
    required: true,
  }
})

const emits = defineEmits(['toggleSchool'])

const selectSchool = (school) => {
  emits('toggleSchool', school)
}
</script>

<template>
  <base-dropdown trigger="click" class="!-skew-x-0 !w-full">
    <template #trigger="{ open }">
      <div
        class="w-full uppercase text-xs font-bold text-white flex items-center justify-between gap-2 cursor-pointer hover:text-light duration-300 sticky top-0 z-10 bg-darkest p-4 rounded-t-md"
      >
        <span>Schools: {{ selectedSchools.length }} Selected</span>

        <Icon
          icon="mdi:chevron-right"
          class="transition-transform duration-300 size-4"
          :class="{ 'rotate-90': open }"
        />
      </div>
    </template>

    <div class="flex flex-col max-h-[600px] overflow-y-auto">
      <school-filter
        v-for="school in schools"
        :key="school.shortName"
        :selected-schools="selectedSchools"
        :school="school"
        @toggle-school="selectSchool"
        class="!first:rounded-t-md !last:rounded-b-md !rounded-none"
      />
    </div>
  </base-dropdown>
</template>
