<script setup>

import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'
import { computed, ref } from 'vue'
import DraftLabIcon from '@/components/DraftLabIcon.vue'
import { Icon } from '@iconify/vue'

const email = ref(null)
const password = ref(null)

const canRegister = computed(() => {
  return email.value && password.value
})
</script>

<template>
  <div class="w-full mt-32 flex items-center justify-center">
    <div class="bg-dark min-w-[500px] rounded-md drop-shadow-md">
      <div class=" bg-light py-4 rounded-t-md flex items-center gap-4 justify-center">
        <draft-lab-icon class="size-6" />
        <span class="font-exclamation inline-block">DraftLab</span>
      </div>

      <div class="p-4 flex flex-col gap-4">
        <div class="text-center">
          <span class="font-exclamation text-white">Register</span>
        </div>

        <div>
          <router-link :to="{ name: 'Login' }" class=" flex items-center gap-2 text-white hover:text-light duration-300">
            <Icon icon="bi:arrow-return-left" class="size-3 color-white" />
            <span class="underline text-sm ">Back to Login</span>
          </router-link>
        </div>

        <!-- Email -->
        <div class="w-full">
          <base-input label="Email" v-model="email" />
        </div>

        <!-- Password -->
        <div class="w-full">
          <base-input label="Password" type="password" v-model="password" />
        </div>

        <div class="pt-16">
          <base-button class="bg-light hover:bg-lightest  w-full" :class="{ 'hover:text-dark': canRegister }" :disabled="!canRegister">Register</base-button>
        </div>
      </div>
    </div>
  </div>
</template>
