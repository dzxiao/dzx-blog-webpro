const xiaoRoutes = [
  // {
    // path: 'about',
    // name: 'about',
    // component: () => import('@/views/xu/Xiao.vue'),
    // meta: {
    //   title: '关于我',
    //   icon: '👨‍💻' as string,
    //   order: 1
    // },
    // children: [
      {
        path: 'personal',
        name: 'personal',
        component: () => import('@/views/xu/components/Personal.vue'),
        meta: {
          title: '个人信息',
          order: 1,
        }
      },
    // ]
  // },
]

export default xiaoRoutes;