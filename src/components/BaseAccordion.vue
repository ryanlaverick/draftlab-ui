<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps({
  openedByDefault: {
    type: Boolean,
    required: false,
    default: true
  }
})

const expanded = ref(props.openedByDefault)
</script>

<template>
  <div class="w-full flex flex-col">
    <!-- Header -->
    <div
      class="w-full uppercase text-xs font-bold text-white flex items-center gap-2 cursor-pointer hover:text-light duration-300 sticky top-0 z-10 bg-darkest p-2 rounded-t-md"
      :class="{ 'rounded-md': !expanded }"
      @click="expanded = !expanded"
    >
      <Icon
        icon="bxs:right-arrow"
        class="transition-transform duration-300"
        :class="{ 'rotate-90': expanded }"
      />

      <span>
        <slot />
      </span>
    </div>

    <!-- Accordion Body -->
    <div
      class="grid transition-all duration-300 ease-in-out bg-darkest rounded-b-md p-2"
      :class="expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr] !p-0'"
    >
      <div class="overflow-hidden">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>
