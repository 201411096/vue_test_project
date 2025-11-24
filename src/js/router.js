import { createWebHistory, createWebHashHistory,  createMemoryHistory, createRouter } from 'vue-router'

import LifeCycle from '../vue/LifeCycle.vue'
import LifeCycle2 from '../vue/LifeCycle2.vue'
import Computed from '../vue/Computed.vue'
import TemplateRef from '../vue/TemplateRef.vue'
import App from '../App.vue'

const routes = [
  { path: '/', component: App },
  { path: '/life-cycle', component: LifeCycle },
  { path: '/life-cycle2', component: LifeCycle2 },
  { path: '/computed', component: Computed },
  { path: '/template-ref', component: TemplateRef },
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
