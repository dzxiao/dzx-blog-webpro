<script setup lang="ts">
import { ref, defineComponent } from "vue";
import XuSider from "@/layout/xu/XuSider.vue";
import markdownTxt from "@/assets/mds/渲染md文档之v-md-editor.md?raw";


defineComponent({
  components: {
    XuSider,
  },
});

const md = ref(markdownTxt);
</script>

<template>
  <n-layout class="blog-layout" has-sider style="height: 100%">
    <!-- 左侧菜单 -->
    <XuSider />

    <!-- 右侧内容区域 -->
    <n-layout class="content-area">
      <div>
        <router-view />
      </div>

      <!-- 锚点导航 -->
      <n-anchor affix style="width: 200px" :bound="120">
        <n-anchor-link title="个人信息" href="#personal-info" />
        <n-anchor-link title="技能专长" href="#skills" />
        <n-anchor-link title="工作经历" href="#experience" />
        <n-anchor-link title="技术文章" href="#frontend" />
        <n-anchor-link title="联系方式" href="#social-media" />
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
  }
}

// 内容区域样式
.content-section {
  margin-bottom: 32px;

  .section-card {
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
}

// 个人信息样式
.personal-info-content {
  .info-header {
    display: flex;
    align-items: flex-start;
    gap: 24px;
    margin-bottom: 24px;

    .info-details {
      flex: 1;

      .info-name {
        margin: 0 0 8px 0;
        font-size: 2rem;
        font-weight: 700;
        color: #2c3e50;
      }

      .info-title {
        display: block;
        font-size: 1.2rem;
        color: #8a2be2;
        margin-bottom: 12px;
      }

      .info-bio {
        font-size: 1rem;
        line-height: 1.6;
      }
    }
  }

  .info-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 0;

    .n-icon {
      color: #8a2be2;
    }
  }
}

// 技能样式
.skill-category {
  .skill-title {
    margin: 0 0 16px 0;
    font-size: 1.2rem;
    font-weight: 600;
    color: #2c3e50;
  }

  // 技能标签主题色
  ::v-deep(.n-tag) {
    background-color: #b36ef3;
    color: #ffffff;
    border-color: #b36ef3;

    &:hover {
      background-color: rgba(157, 77, 231, 1);
      border-color: rgba(157, 77, 231, 1);
    }
  }
}

// 工作经历样式
.experience-content {
  .achievement-list {
    margin-top: 12px;

    ::v-deep(.n-list-item) {
      padding: 4px 0;
    }
  }
}

// 项目卡片样式
.project-card {
  .project-content {
    display: flex;
    gap: 20px;

    .project-image {
      width: 200px;
      height: 120px;
      border-radius: 8px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .project-info {
      flex: 1;

      .project-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 12px;

        .project-title {
          margin: 0;
          font-size: 1.3rem;
          font-weight: 600;
          color: #2c3e50;
        }
      }

      .project-description {
        display: block;
        margin-bottom: 16px;
        line-height: 1.6;
      }

      .project-tech {
        margin-bottom: 16px;
      }

      .project-actions {
        margin-top: 16px;
      }
    }
  }
}

// 文章卡片样式
.article-card {
  .article-content {
    .article-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 12px;

      .article-title {
        margin: 0;
        font-size: 1.2rem;
        font-weight: 600;
        color: #2c3e50;
      }

      .article-meta {
        font-size: 0.9rem;
      }
      ::v-deep(.n-tag) {
        background-color: #b36ef3;
        color: #ffffff;
        border-color: #b36ef3;

        &:hover {
          background-color: rgba(157, 77, 231, 1);
          border-color: rgba(157, 77, 231, 1);
        }
      }
    }

    .article-summary {
      display: block;
      margin-bottom: 16px;
      line-height: 1.6;
      color: #666;
    }

    .article-tags {
      margin-top: 12px;
    }
  }
}

// 联系方式样式
.social-item {
  display: flex;
  align-items: center;
  gap: 12px;

  .social-icon {
    font-size: 20px;
  }

  .social-info {
    flex: 1;

    .n-text {
      display: block;

      &:first-child {
        margin-bottom: 2px;
      }
    }
  }
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;

  .n-icon {
    color: #8a2be2;
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

@media (max-width: 768px) {
  .content-area .main-content {
    padding: 16px;
  }

  .personal-info-content .info-header .info-details .info-name {
    font-size: 1.5rem;
  }

  .article-card .article-content .article-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}

// 深色主题适配
:global(.dark) {
  .content-area .main-content {
    background: #1a1a1a;
  }

  .personal-info-content .info-header .info-details .info-name {
    color: #e2e8f0;
  }

  .personal-info-content .info-header .info-details .info-title {
    color: #667eea;
  }

  .personal-info-content .info-item .n-icon {
    color: #8a2be2;
  }

  .skill-category .skill-title {
    color: #e2e8f0;
  }

  .project-card .project-content .project-info .project-header .project-title {
    color: #e2e8f0;
  }

  .article-card .article-content .article-header .article-title {
    color: #e2e8f0;
  }

  .contact-item .n-icon {
    color: #8a2be2;
  }
}
</style>
