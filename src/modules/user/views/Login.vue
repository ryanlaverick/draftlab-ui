<script setup>

import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'
import { computed, ref } from 'vue'
import DraftLabIcon from '@/components/DraftLabIcon.vue'

const email = ref(null)
const password = ref(null)

const canLogin = computed(() => {
  return email.value && password.value
})
</script>

<template>
  <div class="w-full mt-32 flex items-center justify-center">
    <div class="bg-dark min-w-[500px] rounded-md drop-shadow-lg drop-shadow-light">
      <div class=" bg-light py-4 rounded-t-md flex items-center gap-4 justify-center">
        <draft-lab-icon class="size-6" />
        <span class="font-exclamation inline-block">DraftLab</span>
      </div>

      <div class="p-4 flex flex-col gap-4">
        <div class="text-center">
          <span class="font-exclamation text-white">Login</span>
        </div>

        <div class="flex flex-col gap-4">
          <!-- Email -->
          <div class="w-full">
            <base-input label="Email" v-model="email" />
          </div>

          <!-- Password -->
          <div class="w-full">
            <base-input label="Password" type="password" v-model="password" />
          </div>

          <div class="pt-16 flex flex-col gap-4">
            <div class="text-center text-white">
              <router-link :to="{ name: 'Forgot Password' }">
                <span class="text-sm hover:text-light hover:decoration-light underline duration-300 cursor-pointer">Forgot your password?</span>
              </router-link>
            </div>

            <base-button class="bg-light hover:bg-lightest  w-full" :class="{ 'hover:text-dark': canLogin }" :disabled="!canLogin">Login</base-button>

            <div class="w-full flex justify-center items-center gap-4 text-white">
              <hr class="w-1/3" />

              <span class="text-xs">or</span>

              <hr class="w-1/3" />
            </div>

            <router-link :to="{ name: 'Register' }">
              <base-button class="bg-light hover:bg-lightest hover:text-dark w-full">Register</base-button>
            </router-link>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>
