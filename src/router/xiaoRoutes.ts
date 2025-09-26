const xiaoRoutes = [
  {
    path: 'about',
    name: '/xiao/about',
    component: () => import('@/views/xu/components/index.vue'),
    meta: {
      title: '关于我',
      icon: '👨‍💻' as string,
      order: 1
    },
    children: [
      {
        path: 'personal',
        name: '/xiao/about/personal',
        component: () => import('@/views/xu/components/Personal.vue'),
        meta: {
          title: '个人信息',
          order: 1,
        }
      },
    ]
  },
]

export default xiaoRoutes;