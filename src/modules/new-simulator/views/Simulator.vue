<script setup>
import { computed, defineAsyncComponent, onBeforeUnmount, onUnmounted, ref } from 'vue'
import useSimulator from '@/modules/new-simulator/useSimulator.js'

const { resetSimulation } = useSimulator()

const steps = ref([
  {
    name: 'Configuration',
    active: true,
    component: defineAsyncComponent(
      () => import('@/modules/new-simulator/components/wizard/ConfigurationStep.vue'),
    ),
  },
  {
    name: 'Simulator',
    active: false,
    component: defineAsyncComponent(
      () => import('@/modules/new-simulator/components/wizard/SimulatorStep.vue'),
    ),
  },
])

const activeStep = computed(() => {
  return steps.value.find((step) => step.active)
})

const getConfigurationStep = () => steps.value.find((step) => step.name === 'Configuration')
const getSimulatorStep = () => steps.value.find((step) => step.name === 'Simulator')

const startSimulation = () => {
  getConfigurationStep().active = false
  getSimulatorStep().active = true
}

const returnToSettings = () => {
  getConfigurationStep().active = true
  getSimulatorStep().active = false
}

onUnmounted(() => {
  resetSimulation()
})
</script>

<template>
  <div class="w-full">
    <Transition
      mode="out-in"
      enter-active-class="transform transition-all ease-[cubic-bezier(0.4,0,0.2,1)]"
      enter-from-class="translate-x-8 opacity-0"
      enter-to-class="translate-x-0 opacity-100"
      leave-active-class="transform transition-all ease-[cubic-bezier(0.4,0,0.2,1)]"
      leave-from-class="translate-x-0 opacity-100"
      leave-to-class="-translate-x-8 opacity-0"
    >
      <component
        :is="activeStep.component"
        @start-simulation="startSimulation"
        @return-to-settings="returnToSettings"
      />
    </Transition>
  </div>
</template>
