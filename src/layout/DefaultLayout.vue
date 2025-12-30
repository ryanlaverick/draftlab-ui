<script setup>
</script>

<template>
  <div class="h-screen w-full">
    <!-- Header -->
    <div class="w-full p-16 flex flex-row-reverse items-center gap-16 font-exclamation text-darkest">
      <div>
        My Account
      </div>

      <div>
        Mock Draft Simulator
      </div>

      <div>
        Prospect Board
      </div>
    </div>

    <!-- Content -->
    <router-view />

    <!-- Footer -->
    <div></div>
  </div>
</template>

<style scoped></style>
