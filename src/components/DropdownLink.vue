<script setup>
import DropdownItem from '@/components/DropdownItem.vue'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

const router = useRouter()

const props = defineProps({
  route: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const isVisitingRoute = computed(() => {
  return router.currentRoute.value.name === props.route
})
</script>

<template>
  <router-link :to="{ name: route }">
    <dropdown-item :disabled="disabled">
      <div class="flex items-center gap-2">
        <Transition name="slide-expand" class="duration-300">
          <Icon v-if="isVisitingRoute" icon="bi:arrow-return-right" class="size-4" />
        </Transition>

        <slot />
      </div>

    </dropdown-item>
  </router-link>
</template>

<style scoped>
.slide-expand-enter-active {
  transition: all 0.3s ease-out;
}

.slide-expand-leave-active {
  transition: all 0.3s ease-in;
}

.slide-expand-enter-from {
  opacity: 0;
  transform: translateX(-10px);
}

.slide-expand-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.slide-expand-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.slide-expand-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
</style>
