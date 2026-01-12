<script setup>
import { computed, defineAsyncComponent, ref } from 'vue'

const steps = ref([
  {
    name: 'Settings',
    active: true,
    component: defineAsyncComponent(
      () => import('@/modules/simulator/components/steps/SettingStep.vue'),
    ),
  },
  {
    name: 'Simulator',
    active: false,
    component: defineAsyncComponent(
      () => import('@/modules/simulator/components/steps/SimulationStep.vue'),
    ),
  },
])

const settings = ref()

const activeStep = computed(() => {
  return steps.value.find((step) => step.active)
})

const startSimulation = () => {
  steps.value.find((step) => step.name === 'Settings').active = false
  steps.value.find((step) => step.name === 'Simulator').active = true
}

const updateSettings = (newSettings) => {
  settings.value = newSettings
}
</script>

<template>
  <div class="w-full h-full">
    <component :is="activeStep.component" @update-settings="updateSettings" @start-simulation="startSimulation" />
  </div>
</template>
