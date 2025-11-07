import { RouteRecordRaw } from 'vue-router'
import Home from '@/modules/home/views/index.vue'

const MODULE_NAME = 'Home'
const MODULE_PATH = '/home'

const ROUTES: Array<RouteRecordRaw> = [
  {
    name: MODULE_NAME,
    path: MODULE_PATH,
    component: Home,
    meta: {
      title: MODULE_NAME.toLowerCase(),
      middleware: [],
      moduleName: MODULE_NAME,
    },
  },
]

export const HOME_ROUTE = { ROUTES, MODULE_NAME, MODULE_PATH }
