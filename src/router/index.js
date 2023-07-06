import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/home/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }

    /// lazy-loaded
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
});

export function setupRouter(app) {
  app.use(router);
}

export default router;
