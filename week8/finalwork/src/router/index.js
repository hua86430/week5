import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/Index.vue'),
    children: [
      {
        path: 'home',
        component: () => import('../views/Home.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/Products.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
