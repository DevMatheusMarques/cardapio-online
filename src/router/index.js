import { createRouter, createWebHistory } from 'vue-router'
import DashboardMenu from "@/views/DashboardMenu.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'cardapio',
      component: DashboardMenu
    },
  ]
})

export default router
