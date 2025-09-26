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
          <n-text depth="3" class="user-title">{{ personalInfo.title }}</n-text>
        </div>
      </div>

      <n-menu
        v-model:value="activeSubMenu"
        :collapsed="isCollapsed"
        :options="menuOptions"
        class="blog-menu-list"
        @update:value="switchMenu"
      />
    </div>
  </n-layout-sider>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { personalInfo } from "@/views/xu/components/data";
import xiaoRoutes from "@/router/xiaoRoutes";

const router = useRouter();
const route = useRoute();

// 当前选中的菜单项
const activeSubMenu = ref("personal");
const isCollapsed = ref(false);

// 从路由动态生成菜单选项
const menuOptions = computed(() => {
  const options: any[] = [];

  // 按order排序路由
  const sortedRoutes = xiaoRoutes
    .filter((route: any) => route.meta?.title)
    .sort((a: any, b: any) => (a.meta?.order || 0) - (b.meta?.order || 0));

  sortedRoutes.forEach((route: any) => {
    let menuOption: any = [];
    if (route.children && route.children.length > 0) {
      // 生成多级菜单
      menuOption = {
        label: route.meta?.title,
        key: route.name,
        icon: route.meta?.icon,
        children: [
          ...route.children.map((child: any) => ({
            label: child.meta?.title,
            key: child.name,
            icon: child.meta?.icon,
          })),
        ],
      };
    } else {
      // 生成单级菜单
      menuOption = {
        label: route.meta?.title,
        key: route.name,
        icon: route.meta?.icon,
      };
    }
    options.push(menuOption);
  });
  return options;
});

// 切换菜单
const switchMenu = (value: string) => {
  activeSubMenu.value = value;
  // 导航到对应的路由
  router.push({ path: value });
};

// 监听路由变化，更新当前选中的菜单
const updateActiveMenu = () => {
  const currentRoute = route.name as string;
  if (currentRoute) {
    activeSubMenu.value = currentRoute;
  }
};

// 初始化时更新菜单状态
updateActiveMenu();

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
