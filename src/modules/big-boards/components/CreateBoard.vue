<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <div
    class="bg-green-600 hover:bg-green-700 duration-300 rounded-md h-64 w-full drop-shadow-lg drop-shadow-light cursor-pointer group transform -skew-x-12 overflow-hidden"
  >
    <div class="w-full h-5/12 bg-dark group-hover:bg-base duration-300 p-2 flex flex-col gap-2">
      <div class="w-full flex items-center gap-2">
        <div class="bg-base group-hover:bg-dark duration-300 rounded-full size-6"></div>
        <div class="bg-base group-hover:bg-dark duration-300 rounded-md h-6 w-full"></div>
      </div>

      <div class="w-full flex items-center gap-2">
        <div class="bg-base group-hover:bg-dark duration-300 rounded-full size-6"></div>
        <div class="bg-base group-hover:bg-dark duration-300 rounded-md h-6 w-full"></div>
      </div>

      <div class="w-full flex items-center gap-2">
        <div class="bg-base group-hover:bg-dark duration-300 rounded-full size-6"></div>
        <div class="bg-base group-hover:bg-dark duration-300 rounded-md h-6 w-full"></div>
      </div>
    </div>

    <div class="w-full h-7/12 text-white transform skew-x-12 p-4">
      <router-link
        :to="{ name: 'Create Board' }"
        class="flex flex-col justify-center items-center gap-2"
      >
        <span class="font-exclamation">Create Board</span>
        <Icon icon="ic:round-plus" class="size-20" />
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
