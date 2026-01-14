<script setup>
defineProps({
  school: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <img :src="school.image" :alt="'School Logo for ' + school.name" />
</template>

<style scoped></style>
