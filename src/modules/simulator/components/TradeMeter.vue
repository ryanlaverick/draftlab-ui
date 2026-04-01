<script setup>
import { computed, ref, watch } from 'vue'
import useTradeEngine from '@/modules/simulator/useTradeEngine.js'
import OptionWrapper from '@/modules/simulator/components/OptionWrapper.vue'

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

const tradeIsImpossible = computed(() => {
  return tradeLikelihood.value === 0
})

const tradeIsUnlikely = computed(() => {
  return tradeLikelihood.value > 0 && tradeLikelihood.value <= 20
})

const tradeIsPossible = computed(() => {
  return tradeLikelihood.value > 20 && tradeLikelihood.value <= 60
})

const tradeIsLikely = computed(() => {
  return tradeLikelihood.value > 60 && tradeLikelihood.value < 100
})

const tradeIsGuaranteed = computed(() => {
  return tradeLikelihood.value >= 100
})

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
  <option-wrapper label="Trade Likelihood">
    <template #aside >
      <span class="font-exclamation">
        <span v-if="tradeIsImpossible" class="text-red-500">Impossible</span>
        <span v-if="tradeIsUnlikely" class="text-orange-500">Unlikely</span>
        <span v-if="tradeIsPossible" class="text-yellow-500">Possible</span>
        <span v-if="tradeIsLikely" class="text-lime-500">Likely</span>
        <span v-if="tradeIsGuaranteed" class="text-green-500">Guaranteed</span>
      </span>
    </template>

    <div class="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <!-- Meter fill -->
      <div
        class="h-full transition-all duration-500 ease-out bg-light"
        :style="{ width: tradeLikelihood + '%' }"
      />
    </div>
  </option-wrapper>

</template>

<style scoped></style>
