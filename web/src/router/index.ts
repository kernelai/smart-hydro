const routes = [
  // ... other routes ...
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard.vue'),
    meta: {
      title: '数据概览',
      requiresAuth: true
    }
  }
] 