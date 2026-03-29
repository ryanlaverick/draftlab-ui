<script setup>
import { ref, watch } from 'vue'
import useTradeEngine from '@/modules/simulator/useTradeEngine.js'

const props = defineProps({
  tradingWith: {
    type: Array,
    required: true,
  },
  tradingFor: {
    type: Array,
    required: true,
  },
})

const tradeEngine = useTradeEngine()

const tradeLikelihood = ref(0)

watch(
  () => props.tradingWith,
  () => {
    tradeLikelihood.value = tradeEngine.getLikelihood(props.tradingWith, props.tradingFor)
  },
  { immediate: true, deep: true }
)

watch(
  () => props.tradingFor,
  () => {
    tradeLikelihood.value = tradeEngine.getLikelihood(props.tradingWith, props.tradingFor)
  },
  { immediate: true, deep: true }
)
</script>

<template>
  <div class="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
    <!-- Meter fill -->
    <div
      class="h-full transition-all duration-500 ease-out bg-light"
      :style="{ width: tradeLikelihood + '%' }"
    />
  </div>
</template>

<style scoped></style>
