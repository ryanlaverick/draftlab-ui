<script setup>
import HeaderItem from '@/components/HeaderItem.vue'
import { Icon } from '@iconify/vue'
import DraftLabIcon from '@/components/DraftLabIcon.vue'
</script>

<template>
  <div class="h-screen w-full p-16">
    <!-- Header -->
    <div
      class="w-full flex justify-between items-center gap-16 font-exclamation text-darkest mb-16"
    >
      <div class="flex items-center gap-4 duration-300 hover:text-light">
        <draft-lab-icon class="size-6" />
        <h1 class="cursor-pointer">DraftLab</h1>
      </div>

      <div class="flex items-center gap-16">
        <header-item route="Prospect Big Board">Big Board</header-item>
        <header-item route="Mock Draft Simulator">Simulator</header-item>
        <header-item route="Prospects">Prospects</header-item>
        <header-item route="Login">
          My Account
        </header-item>
      </div>
    </div>

    <!-- Content -->
    <router-view />
  </div>
</template>
