<script setup>
import HeaderItem from '@/components/HeaderItem.vue'
import BaseDropdown from '@/components/BaseDropdown.vue'
import DraftLabIcon from '@/components/DraftLabIcon.vue'
import DropdownLink from '@/components/DropdownLink.vue'
</script>

<template>
  <div class="h-screen w-full p-16">
    <!-- Header -->
    <div class="w-full flex justify-between items-center gap-16 text-darkest mb-16">
      <div class="flex items-center gap-4 duration-300 hover:text-light">
        <draft-lab-icon class="size-6" />
        <h1 class="cursor-pointer font-exclamation">DraftLab</h1>
      </div>

      <div class="flex items-center gap-16">
        <base-dropdown>
          <template #trigger>
            <header-item>Big Board</header-item>
          </template>

          <div>
            <dropdown-link route="My Boards">My Boards</dropdown-link>
            <dropdown-link route="Create Board">Create Board</dropdown-link>
          </div>
        </base-dropdown>

        <header-item route="Mock Draft Simulator">Simulator</header-item>
        <header-item route="Prospects">Prospects</header-item>
        <header-item route="Login"> My Account </header-item>
      </div>
    </div>

    <!-- Content -->
    <router-view />
  </div>
</template>
