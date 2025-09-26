import type { App } from "vue";
import { createRouter, createWebHistory } from 'vue-router';
import type { Router } from 'vue-router';
import xiaoRoutes from './xiaoRoutes';

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_PATH),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/xiao',
      name: 'xiao',
      // redirect: '/xiao/personal',
      component: () => import('@/views/xu/Xiao.vue'),
      children: xiaoRoutes
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