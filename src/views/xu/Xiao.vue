<script setup lang="ts">
import { ref, defineComponent, nextTick, watch } from "vue";
import XuSider from "@/layout/xu/XuSider.vue";
import { useRoute } from "vue-router";

defineComponent({
  components: {
    XuSider,
  },
});
const route = useRoute();

// 动态锚点链接
const anchorLinks = ref<Array<{ title: string; href: string }>>([]);

// 生成锚点链接
const generateAnchorLinks = () => {
  const links: Array<{ title: string; href: string }> = [];

  // 查找所有 n-card-header__main 元素
  const cardHeaders = document.querySelectorAll(".n-card-header__main");

  cardHeaders.forEach((header, index) => {
    const title = header.textContent?.trim();
    if (title) {
      const id = generateIdFromTitle(title, index);
      // 为父元素添加ID
      const card = header.closest(".n-card");
      if (card) {
        card.id = id;
      }
      links.push({
        title: title,
        href: `#${id}`,
      });
    }
  });

  anchorLinks.value = links;
};

// 根据标题生成ID
const generateIdFromTitle = (title: string, index: number): string => {
  return `section-${index + 1}`;
};

watch(
  () => route.path,
  () => {
    anchorLinks.value = [];
    nextTick(() => {
      // 延迟执行，确保子组件已渲染
      setTimeout(() => {
        generateAnchorLinks();
      }, 100);
    });
  }
);
</script>

<template>
  <n-layout class="blog-layout" has-sider style="height: 100%">
    <!-- 左侧菜单 -->
    <XuSider />

    <!-- 右侧内容区域 -->
    <n-layout class="content-area">
      <div style="width: calc(100% - 200px)">
        <router-view />
      </div>

      <!-- 锚点导航 -->
      <n-anchor :affix="true" :bound="120">
        <n-anchor-link
          v-for="link in anchorLinks"
          :key="link.href"
          :title="link.title"
          :href="link.href"
        />
      </n-anchor>
    </n-layout>
  </n-layout>
</template>

<style scoped lang="less">
.blog-layout {
  height: 100vh;
}

// 右侧内容区域
.content-area {
  height: 100%;
  > ::v-deep(.n-layout-scroll-container) {
    display: flex;
    flex-direction: row;
  }
  .main-content {
    padding: 24px;
    background: #fffefaff;
    overflow-y: auto;
  }
  .n-affix {
    padding-top: 20px;
    position: fixed;
    width: 200px;
    right: 0;
  }
}

// 响应式设计
@media (max-width: 1200px) {
  .content-area .main-content {
    padding: 20px;
  }

  .personal-info-content .info-header {
    flex-direction: column;
    text-align: center;
  }

  .project-card .project-content {
    flex-direction: column;

    .project-image {
      width: 100%;
      height: 200px;
    }
  }
}
</style>
