<script setup>
import BaseReturn from '@/components/BaseReturn.vue'

const emits = defineEmits(['returnToSettings'])

const returnToSettings = () => {
  emits('returnToSettings')
}
</script>

<template>
  <div class="flex flex-col gap-8">
    <base-return @click="returnToSettings">
      Return to Settings
    </base-return>


  </div>
</template>

<style scoped></style>
