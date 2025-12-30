<script setup>
import HeaderItem from '@/components/HeaderItem.vue'
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="h-screen w-full">
    <!-- Header -->
    <div class="w-full p-16 flex justify-between items-center gap-16 font-exclamation text-darkest">
      <div class="flex items-center gap-4">
        <Icon icon="uil:flask" class="size-8" />
        <h1>DraftLab</h1>
      </div>

      <div class="flex items-center gap-16">
        <header-item text="Big Board" route="Prospect Big Board" />
        <header-item text="Simulator" route="Mock Draft Simulator" />
        <header-item text="Prospects" route="Prospects" />
      </div>
    </div>

    <!-- Content -->
    <router-view />
  </div>
</template>
