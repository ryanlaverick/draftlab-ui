<script setup>
defineProps({
  route: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <div
    class="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[6px] after:w-0 after:bg-light after:transition-all after:duration-300 hover:after:w-full after:[clip-path:polygon(0_0,100%_0,95%_100%,0_100%)] group cursor-pointer"
  >
    <router-link v-if="route" :to="{ name: route }">
      <div class="group-hover:duration-300 group-hover:text-light font-exclamation">
        <slot />
      </div>
    </router-link>

    <div v-else class="group-hover:duration-300 group-hover:text-light font-exclamation">
      <slot />
    </div>
  </div>
</template>
