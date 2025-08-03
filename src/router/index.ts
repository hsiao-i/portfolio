import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import PublicLayout from '@/views/layout/PublicLayout.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'publicLayout',
      component: PublicLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomePage,
        },
        {
          path: 'project/:id',
          name: 'project',
          component: () => import('@/views/project/ProjectDetail.vue'),
        },
      ],
    },
  ],
});

export default router;
