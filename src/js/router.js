import { createWebHistory, createWebHashHistory,  createMemoryHistory, createRouter } from 'vue-router'

import LifeCycle from '../vue/LifeCycle.vue'
import LifeCycle2 from '../vue/LifeCycle2.vue'

const routes = [
  { path: '/life-cycle', component: LifeCycle },
  { path: '/life-cycle2', component: LifeCycle2 },
]

/*
히스토리 모드
- createWebHistory
- createWebHashHistory
- createMemoryHistory

 */

export const router = createRouter({
//   history: createWebHistory(),
//   history: createWebHashHistory(),
  history: createMemoryHistory(),
  routes,
})
