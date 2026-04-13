import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'

export const useAuthentication = defineStore("authentication", () => {
  const state = reactive({
    user: {},
    authenticated: false
  })

  const resetState = () => {
    state.user = {}
    state.authenticated = false
  }

  const isAuthenticated = computed(() => state.authenticated)
  const isLoggedIn = computed(() => isAuthenticated.value && state.user)

  return {
    resetState,
    isLoggedIn,
  }
})
