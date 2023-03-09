import type { App } from "vue";
import { createRouter, createWebHistory } from 'vue-router';
import type { Router } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_PATH),
  routes: [
    {
      path: '/',
      redirect: '/xiao',
    },
    {
      path: '/xiao',
      name: 'xiao',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    }
  ]
})

function createRouteGuard(router: Router) {
  router.beforeEach(async () => {
    // 显示加载条
    window.$loadingBar.start();
  });
  /* eslint-disable */
  router.afterEach((to: any) => {
    window.$loadingBar.finish();
  })
}
export async function setupRouter(app: App) {
  app.use(router)
  createRouteGuard(router)
}
export default router