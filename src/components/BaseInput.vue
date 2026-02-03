<script setup>
const model = defineModel()

defineProps({
  label: {
    type: String,
    required: false,
  },
  placeholder: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: false,
    default: 'text',
  },
})
</script>

<template>
  <div class="flex flex-col gap-1">
    <span class="font-semibold text-white uppercase text-xs">{{ label }}</span>
    <input
      v-model="model"
      :type="type"
      :placeholder="placeholder"
      class="bg-slate-200 p-2 placeholder:text-dark/70 text-sm border border-dark rounded-md focus:ring-0 text-dark/70 text-semibold shadow-inner"
    />
  </div>
</template>
