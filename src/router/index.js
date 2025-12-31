import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/big-board',
      name: 'Prospect Big Board',
      component: () => import('@/views/BigBoard.vue'),
    },
    {
      path: '/simulator',
      name: 'Mock Draft Simulator',
      component: () => import('@/modules/simulator/views/MockDraftSimulator.vue'),
    },
    {
      path: '/prospects',
      name: 'Prospects',
      component: () => import('@/views/Prospects.vue'),
    },
  ],
})

export default router
