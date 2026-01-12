<script setup>
import { computed, defineAsyncComponent, onMounted, ref, shallowRef } from 'vue'

const steps = shallowRef([
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

const updateSettings = (newSettings) => {
  settings.value = newSettings
}
</script>

<template>
  <div class="w-full h-full">
    <keep-alive>
      <component :is="activeStep.component" @update-settings="updateSettings" />
    </keep-alive>
  </div>
</template>
