import axios from "axios"
import { useAuthentication } from '@/composables/useAuthentication.js'
import router from '@/router/index.js'

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true
})

httpClient.interceptors.response.use(
  () => {},
  (error) => {
    const authentication = useAuthentication()

    if (error.response && error.response.status === 419 && authentication.isLoggedIn) {
      authentication.resetState()
      router.push({ name: 'Dashboard' })
    }

    return Promise.reject()
  }
)

export default httpClient
