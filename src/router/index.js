import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: '/my-boards',
      name: 'My Boards',
      component: () => import('@/modules/big-boards/views/MyBoards.vue'),
    },
    {
      path: '/create-board',
      name: 'Create Board',
      component: () => import('@/modules/big-boards/views/CreateBoard.vue'),
    },
    {
      path: '/view-board/:id',
      name: 'View Board',
      component: () => import('@/modules/big-boards/views/ViewBoard.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/modules/user/views/Login.vue'),
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/modules/user/views/Register.vue'),
    },
    {
      path: '/forgot-password',
      name: 'Forgot Password',
      component: () => import('@/modules/user/views/ForgotPassword.vue'),
    },
    {
      path: '/reset-password',
      name: 'Reset Password',
      component: () => import('@/modules/user/views/ResetPassword.vue'),
    },
  ],
})

export default router
