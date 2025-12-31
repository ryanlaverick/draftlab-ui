<script setup></script>

<template>
  <button
    class="relative px-4 py-2 transform -skew-x-12 bg-dark rounded-md hover:bg-light duration-300 text-white cursor-pointer"
  >
    <span class="inline-block transform skew-x-12">
      <slot />
    </span>
  </button>
</template>
