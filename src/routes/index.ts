import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { authGuard } from '@/middlewares/app/authGuard'
import { HOME_ROUTE } from '@/modules/home/routers'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
    beforeEnter: authGuard,
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      ...HOME_ROUTE.ROUTES,
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFound.vue'),
      },
      {
        path: '/no-permission',
        name: 'NoPermission',
        component: () => import('@/views/NoPermission.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router
