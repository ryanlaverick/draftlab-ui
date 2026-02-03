<template>
  <div class="relative inline-block text-left" @mouseenter="openMenu" @mouseleave="closeMenu">
    <div>
      <slot name="trigger" />
    </div>

    <!-- Dropdown -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 scale-95 -translate-y-1"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-95 -translate-y-1"
    >
      <div
        v-if="isOpen"
        v-bind="$attrs"
        class="absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-base drop-shadow-lg drop-shadow-light text-white overflow-hidden transform -skew-x-12"
      >
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let isOpen = ref(false)

const openMenu = () => {
  isOpen.value = true
}

const closeMenu = () => {
  isOpen.value = false
}
</script>
