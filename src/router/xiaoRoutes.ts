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
    redirect: "/xiao/article/list",
    component: () => import("@/views/xu/components/index.vue"),
    meta: {
      title: "文章",
      icon: "📝" as string,
      order: 2,
    },
    children: [
      {
        path: "list",
        name: "/xiao/article/list",
        component: () => import("@/views/xu/components/ArticleList.vue"),
        meta: {
          title: "文章列表",
          order: 1,
        },
      },
      {
        path: ":id",
        name: "/xiao/article/detail",
        component: () => import("@/views/xu/components/ArticleDetail.vue"),
        meta: {
          hidden: true,
        },
      },
    ],
  },
];

export default xiaoRoutes;
