<script setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

defineProps({
  selectedOptions: {
    type: Array,
    required: true
  },
  availableOptions: {
    type: Array,
    required: true
  }
})

const expanded = ref(false)
</script>

<template>
  <div class="flex flex-col gap-8">
    <div class="w-full bg-white p-2 rounded-md border border-light flex items-center gap-2" @click="expanded = !expanded">
      <span v-for="option in selectedOptions" :key="option.label" class="p-1 border border-light rounded-md flex items-center gap-2">
        <span>{{ option.value }}</span>
        <Icon icon="charm:cross" class="size-2 bg-slate-500 hover:bg-light duration-300" />
      </span>
    </div>

    <div v-show="expanded" class="bg-white w-full min-h-64 rounded-md z-10 flex items-center">
      <div v-for="option in availableOptions" :key="option.label" class="p-1 border border-light rounded-md">
        <span>{{ option.value }}</span>
      </div>
    </div>
  </div>

</template>
