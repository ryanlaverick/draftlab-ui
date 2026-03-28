import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'

const app = createApp(App)

app.use(router)

app.mount('#app')

dayjs.extend(duration)
dayjs.extend(relativeTime)
