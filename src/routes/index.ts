import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { HOME_ROUTE } from '@/modules/home/routers'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      ...HOME_ROUTE.ROUTES,
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFound.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router
