<script setup lang="ts">
import {
  personalInfo,
  skills,
  experiences,
  articles,
  contactInfo,
} from "./data";
</script>
<template>
  <n-layout-content class="main-content">
    <!-- 个人信息 -->
    <div class="content-section">
      <n-card title="个人信息" class="section-card">
        <div class="personal-info-content">
          <div class="info-header">
            <n-avatar :size="120" :src="personalInfo.avatar" round />
            <div class="info-details">
              <n-h1 class="info-name">{{ personalInfo.name }}</n-h1>
              <n-text class="info-title">{{ personalInfo.title }}</n-text>
              <n-text depth="3" class="info-bio">{{ personalInfo.bio }}</n-text>
            </div>
          </div>

          <n-divider />

          <n-grid :cols="2" :x-gap="24" :y-gap="16">
            <n-gi>
              <div class="info-item">
                <n-icon
                  ><svg viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    /></svg
                ></n-icon>
                <n-text>{{ personalInfo.location }}</n-text>
              </div>
            </n-gi>
            <n-gi>
              <div class="info-item">
                <n-icon
                  ><svg viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                    /></svg
                ></n-icon>
                <n-text>{{ personalInfo.email }}</n-text>
              </div>
            </n-gi>
            <n-gi>
              <div class="info-item">
                <n-icon
                  ><svg viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                    /></svg
                ></n-icon>
                <n-text>{{ personalInfo.phone }}</n-text>
              </div>
            </n-gi>
            <n-gi>
              <div class="info-item">
                <n-icon
                  ><svg viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
                    /></svg
                ></n-icon>
                <n-text>{{ personalInfo.website }}</n-text>
              </div>
            </n-gi>
          </n-grid>
        </div>
      </n-card>
    </div>

    <!-- 技能专长 -->
    <div class="content-section">
      <n-card title="技能专长" class="section-card">
        <n-grid :cols="2" :x-gap="24" :y-gap="20">
          <n-gi v-for="skill in skills" :key="skill.category">
            <div class="skill-category">
              <n-h3 class="skill-title">{{ skill.category }}</n-h3>
              <n-space wrap>
                <n-tag
                  v-for="item in skill.items"
                  :key="item"
                  type="info"
                  size="medium"
                >
                  {{ item }}
                </n-tag>
              </n-space>
            </div>
          </n-gi>
        </n-grid>
      </n-card>
    </div>

    <!-- 工作经历 -->
    <div class="content-section">
      <n-card title="工作经历" class="section-card">
        <n-timeline>
          <n-timeline-item
            v-for="exp in experiences"
            :key="exp.company"
            :title="exp.company"
            :content="exp.position"
            :time="exp.duration"
          >
            <div class="experience-content">
              <n-text>{{ exp.description }}</n-text>
              <n-list class="achievement-list">
                <n-list-item
                  v-for="achievement in exp.achievements"
                  :key="achievement"
                >
                  <n-text depth="3">• {{ achievement }}</n-text>
                </n-list-item>
              </n-list>
            </div>
          </n-timeline-item>
        </n-timeline>
      </n-card>
    </div>

    <!-- Web项目 -->
    <!-- <div id="web-projects" class="content-section">
    <n-card title="Web项目" class="section-card">
      <n-grid :cols="1" :y-gap="24">
        <n-gi v-for="project in projects" :key="project.title">
          <n-card class="project-card" hoverable>
            <div class="project-content">
              <div class="project-image">
                <img :src="project.image" :alt="project.title" />
              </div>
              <div class="project-info">
                <div class="project-header">
                  <n-h3 class="project-title">{{ project.title }}</n-h3>
                  <n-tag :type="project.status === '已完成' ? 'success' : 'warning'">
                    {{ project.status }}
                  </n-tag>
                </div>
                <n-text class="project-description">{{ project.description }}</n-text>
                <div class="project-tech">
                  <n-space wrap>
                    <n-tag
                      v-for="tech in project.tech"
                      :key="tech"
                      size="small"
                      type="info"
                    >
                      {{ tech }}
                    </n-tag>
                  </n-space>
                </div>
                <div class="project-actions">
                  <n-space>
                    <n-button type="primary" ghost>查看演示</n-button>
                    <n-button ghost>源码</n-button>
                  </n-space>
                </div>
              </div>
            </div>
          </n-card>
        </n-gi>
      </n-grid>
    </n-card>
  </div> -->

    <!-- 技术文章 -->
    <div class="content-section">
      <n-card title="技术文章" class="section-card">
        <n-list>
          <n-list-item v-for="article in articles" :key="article.title">
            <n-card class="article-card" hoverable>
              <div class="article-content">
                <div class="article-header">
                  <n-h3 class="article-title">{{ article.title }}</n-h3>
                  <n-space>
                    <n-tag size="small" type="info">{{
                      article.category
                    }}</n-tag>
                    <n-text depth="3" class="article-meta"
                      >{{ article.publishDate }} ·
                      {{ article.readTime }}</n-text
                    >
                  </n-space>
                </div>
                <n-text class="article-summary">{{ article.summary }}</n-text>
                <div class="article-tags">
                  <n-space wrap>
                    <n-tag
                      v-for="tag in article.tags"
                      :key="tag"
                      size="small"
                      type="default"
                    >
                      {{ tag }}
                    </n-tag>
                  </n-space>
                </div>
              </div>
            </n-card>
          </n-list-item>
        </n-list>
      </n-card>
    </div>

    <!-- 联系方式 -->
    <div class="content-section">
      <n-card title="联系方式" class="section-card">
        <n-grid :cols="2" :x-gap="24" :y-gap="20">
          <n-gi>
            <n-h3>社交媒体</n-h3>
            <n-list>
              <n-list-item
                v-for="social in contactInfo.socialMedia"
                :key="social.platform"
              >
                <div class="social-item">
                  <span class="social-icon">{{ social.icon }}</span>
                  <div class="social-info">
                    <n-text strong>{{ social.platform }}</n-text>
                    <n-text depth="3">{{ social.username }}</n-text>
                  </div>
                </div>
              </n-list-item>
            </n-list>
          </n-gi>
          <n-gi>
            <n-h3>联系信息</n-h3>
            <n-space vertical size="large">
              <div class="contact-item">
                <n-icon
                  ><svg viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                    /></svg
                ></n-icon>
                <n-text>{{ contactInfo.email }}</n-text>
              </div>
              <div class="contact-item">
                <n-icon
                  ><svg viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                    /></svg
                ></n-icon>
                <n-text>{{ contactInfo.phone }}</n-text>
              </div>
              <div class="contact-item">
                <n-icon
                  ><svg viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    /></svg
                ></n-icon>
                <n-text>{{ contactInfo.address }}</n-text>
              </div>
            </n-space>
          </n-gi>
        </n-grid>
      </n-card>
    </div>
  </n-layout-content>
</template>

<style scoped lang="less">
@import "./index.scss";

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
