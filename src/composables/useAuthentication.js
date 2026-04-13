import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import httpClient from '@/composables/httpClient.js'
import router from '@/router/index.js'

export const useAuthentication = defineStore("authentication", () => {
  const state = reactive({
    user: {},
    authenticated: false
  })

  const resetState = () => {
    state.user = {}
    state.authenticated = false
  }

  const login = async (email, password) => {
    await httpClient.post("/login", {
        email,
        password
      }
    ).then(() => {
      router.push({ name: "My Boards" })
      console.log('Success!')
    }).catch(() => {
      console.log('Error')
    })
  }

  const isAuthenticated = computed(() => state.authenticated)
  const isLoggedIn = computed(() => isAuthenticated.value && state.user)

  return {
    login,

    resetState,
    isLoggedIn,
  }
})
