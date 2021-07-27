import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () =>
      import(/*webpackChunkName:'login-chunk'*/ 'pages/login/login.vue')
  },
  {
    path: '/home',
    component: () =>
      import(/*webpackChunkName:'home-chunk'*/ 'pages/home/home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
