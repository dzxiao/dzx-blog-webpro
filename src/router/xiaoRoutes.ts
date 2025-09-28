const xiaoRoutes = [
  {
    path: "about",
    name: "/xiao/about",
    redirect: "/xiao/about/personal",
    component: () => import("@/views/xu/components/index.vue"),
    meta: {
      title: "关于我",
      icon: "👨‍💻" as string,
      order: 1,
    },
    children: [
      {
        path: "personal",
        name: "/xiao/about/personal",
        component: () => import("@/views/xu/components/Personal.vue"),
        meta: {
          title: "个人信息",
          order: 1,
        },
      },
    ],
  },
  {
    path: "article",
    name: "/xiao/article",
    component: () => import("@/views/xu/components/index.vue"),
    meta: {
      title: "文章",
      icon: "📝" as string,
      order: 2,
    },
    children: [
      {
        path: "frontend",
        name: "/xiao/article/frontend",
        component: () => import("@/views/xu/components/Frontend.vue"),
        meta: {
          title: "前端技术",
          order: 1,
        },
      },
    ],
  },
];

export default xiaoRoutes;
