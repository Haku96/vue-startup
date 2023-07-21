import { createRouter, createWebHistory } from 'vue-router';
import createRouterGuard from './router-guard';
import HomeView from '../views/home/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: HomeView,
      redirect: '/'
    }

    /// lazy-loaded
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
});

createRouterGuard(router);

export function setupRouter(app) {
  app.use(router);
}

export default router;
