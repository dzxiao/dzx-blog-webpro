<template>
  <n-layout-sider
    bordered
    collapse-mode="width"
    :collapsed-width="64"
    :width="280"
    :collapsed="isCollapsed"
    show-trigger
    style="height: 100%"
    @collapse="isCollapsed = true"
    @expand="isCollapsed = false"
  >
    <div class="blog-menu">
      <div class="menu-header" v-if="!isCollapsed">
        <n-avatar :size="60" :src="personalInfo.avatar" round />
        <div class="user-info">
          <n-text strong class="user-name">{{ personalInfo.name }}</n-text>
          <n-text depth="3" class="user-title">{{
            personalInfo.title
          }}</n-text>
        </div>
      </div>

      <n-menu
        v-model:value="activeSubMenu"
        :collapsed="isCollapsed"
        :options="menuOptions"
        class="blog-menu-list"
      />
    </div>
  </n-layout-sider>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { personalInfo } from "@/views/xu/components/data";

// 博客菜单数据
const blogMenu = [
  {
    id: "about",
    title: "关于我",
    icon: "👨‍💻",
    children: [
      { id: "personal-info", title: "个人信息", href: "#personal-info" },
    ],
  },
  {
    id: "articles",
    title: "技术文章",
    icon: "📝",
    children: [
      { id: "frontend", title: "前端技术", href: "#frontend" },
      { id: "backend", title: "后端开发", href: "#backend" },
      { id: "devops", title: "DevOps", href: "#devops" },
    ],
  },
];

// 当前选中的菜单项
const activeMenu = ref("about");
const activeSubMenu = ref("personal-info");
const isCollapsed = ref(false);

// 切换菜单
const switchMenu = (menuId: string, subMenuId?: string) => {
  activeMenu.value = menuId;
  if (subMenuId) {
    activeSubMenu.value = subMenuId;
  }
};

// 菜单选项
const menuOptions = computed(() => {
  const options: any[] = [];

  blogMenu.forEach((menu) => {
    const menuOption = {
      label: menu.title,
      key: menu.id,
      icon: menu.icon,
      children: menu.children.map((child) => ({
        label: child.title,
        key: child.id,
      })),
    };
    options.push(menuOption);
  });

  return options;
});

// 暴露给父组件的方法和属性
defineExpose({
  activeSubMenu,
  isCollapsed,
  switchMenu,
});
</script>

<style scoped lang="less">
// 左侧菜单样式
.blog-menu {
  height: 100%;
  display: flex;
  flex-direction: column;

  .menu-header {
    padding: 24px 20px;
    display: flex;
    align-items: center;
    gap: 16px;
    border-bottom: 1px solid var(--n-border-color);

    .user-info {
      flex: 1;

      .user-name {
        display: block;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 4px;
      }

      .user-title {
        font-size: 12px;
      }
    }
  }

  .blog-menu-list {
    flex: 1;
    padding: 16px 0;

    ::v-deep(.n-menu-item-content) {
      padding-left: 20px;
    }

    ::v-deep(.n-menu-item-content--child) {
      padding-left: 40px;
    }
  }
}
</style>