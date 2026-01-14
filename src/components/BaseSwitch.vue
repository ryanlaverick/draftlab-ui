<script setup>
import { Icon } from '@iconify/vue'

const isChecked = defineModel()

const handleCheckboxChange = () => {
  isChecked.value = !isChecked.value
}
</script>

<template>
  <label class="flex items-center cursor-pointer select-none">
    <div class="relative">
      <input type="checkbox" class="sr-only" @change="handleCheckboxChange" />
      <div
        class="h-5 rounded-full shadow-inner transition duration-300 w-14"
        :class="{ 'bg-light': isChecked, 'bg-darkest': !isChecked }"
      ></div>
      <div
        :class="{ 'translate-x-full': isChecked }"
        class="absolute left-0 -top-1 h-7 w-7 flex items-center justify-center transition bg-white rounded-full dot shadow-switch-1"
      >
        <Icon icon="charm:tick" v-if="isChecked" class="size-5 text-dark/50" />
        <Icon icon="charm:cross" v-else class="size-5 text-dark/50" />
      </div>
    </div>
  </label>
</template>
