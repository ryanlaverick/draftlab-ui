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
      component: () => import('@/modules/prospects/views/Prospects.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/modules/user/views/Login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/modules/user/views/Register.vue')
    },
    {
      path: '/forgot-password',
      name: 'ForgotPassword',
      component: () => import('@/modules/user/views/ForgotPassword.vue')
    },
    {
      path: '/reset-password',
      name: 'ResetPassword',
      component: () => import('@/modules/user/views/ResetPassword.vue')
    }
  ],
})

export default router
