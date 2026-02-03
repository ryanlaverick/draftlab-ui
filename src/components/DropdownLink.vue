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
        <Icon v-if="isVisitingRoute" icon="bi:arrow-return-right" class="size-4" />
        <slot />
      </div>
    </dropdown-item>
  </router-link>
</template>

<style scoped></style>
