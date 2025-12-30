<script setup>
defineProps({
  route: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div
    class="relative inline-block after:absolute after:left-0 after:-bottom-1
     after:h-[6px] after:w-0 after:bg-light after:transition-all
     after:duration-300 hover:after:w-full after:[clip-path:polygon(0_0,100%_0,95%_100%,0_100%)]
     hover:text-light cursor-pointer
    "
  >
    <router-link :to="{ name: route }">{{ text }}</router-link>
  </div>
</template>
