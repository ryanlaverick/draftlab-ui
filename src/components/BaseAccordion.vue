<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const expanded = ref(true)
</script>

<template>
  <div class="w-full flex flex-col">
    <!-- Header -->
    <div
      class="w-full uppercase text-xs font-bold text-white flex items-center gap-2 cursor-pointer hover:text-light duration-300 sticky top-0 z-10 bg-darkest p-2 rounded-t-md"
      @click="expanded = !expanded"
    >
      <Icon
        :icon="expanded ? 'bxs:down-arrow' : 'bxs:right-arrow'"
        class="transition-transform duration-300"
      />

      <span>
        <slot />
      </span>
    </div>

    <!-- Accordion Body -->
    <div
      class="grid transition-[grid-template-rows] duration-300 ease-in-out bg-darkest rounded-b-md"
      :class="expanded ? 'grid-rows-[1fr] p-2' : 'grid-rows-[0fr] p-0'"
    >
      <div class="overflow-hidden">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>
