<script setup lang="ts">
import { ref, defineComponent, reactive, computed, h } from "vue";
import { useThemeStore } from "@/stores/pinia";
import { storeToRefs } from "pinia";
import XuSider from "@/layout/xu/XuSider.vue";
import markdownTxt from "@/assets/mds/渲染md文档之v-md-editor.md?raw";

const themeStore = useThemeStore();
const switchTheme = (type: string) => {
  themeStore.changeTheme(type);
};

defineComponent({
  components: {
    XuSider,
  },
});

const md = ref(markdownTxt);

// 博客菜单数据
const blogMenu = reactive([
  {
    id: 'about',
    title: '关于我',
    icon: '👨‍💻',
    children: [
      { id: 'personal-info', title: '个人信息', href: '#personal-info' },
      { id: 'skills', title: '技能专长', href: '#skills' },
      { id: 'experience', title: '工作经历', href: '#experience' }
    ]
  },
  {
    id: 'projects',
    title: '项目作品',
    icon: '🚀',
    children: [
      { id: 'web-projects', title: 'Web项目', href: '#web-projects' },
      { id: 'mobile-apps', title: '移动应用', href: '#mobile-apps' },
      { id: 'open-source', title: '开源项目', href: '#open-source' }
    ]
  },
  {
    id: 'articles',
    title: '技术文章',
    icon: '📝',
    children: [
      { id: 'frontend', title: '前端技术', href: '#frontend' },
      { id: 'backend', title: '后端开发', href: '#backend' },
      { id: 'devops', title: 'DevOps', href: '#devops' }
    ]
  },
  {
    id: 'contact',
    title: '联系方式',
    icon: '📞',
    children: [
      { id: 'social-media', title: '社交媒体', href: '#social-media' },
      { id: 'email', title: '邮箱联系', href: '#email' },
      { id: 'resume', title: '简历下载', href: '#resume' }
    ]
  }
])

// 个人信息数据
const personalInfo = reactive({
  name: '张三',
  title: '全栈开发工程师',
  avatar: 'https://avatars.githubusercontent.com/u/1?v=4',
  location: '北京市',
  email: 'zhangsan@example.com',
  phone: '+86 138-0000-0000',
  website: 'https://zhangsan.dev',
  bio: '热爱技术，专注于前端和后端开发，拥有5年以上的软件开发经验。喜欢学习新技术，分享技术心得，致力于用技术解决实际问题。'
})

// 技能数据
const skills = reactive([
  { category: '前端技术', items: ['Vue.js', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Sass/Less'] },
  { category: '后端技术', items: ['Node.js', 'Python', 'Java', 'Spring Boot', 'Express.js', 'Django'] },
  { category: '数据库', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'] },
  { category: '工具 & 平台', items: ['Git', 'Docker', 'Kubernetes', 'AWS', 'Vercel', 'Jenkins'] }
])

// 工作经历数据
const experiences = reactive([
  {
    company: '腾讯科技',
    position: '高级前端工程师',
    duration: '2021.03 - 至今',
    description: '负责公司核心产品的前端开发，使用Vue3+TypeScript构建高性能的Web应用，参与架构设计和技术选型。',
    achievements: ['主导重构了用户中心模块，性能提升40%', '建立了前端组件库，提高了开发效率', '指导团队3名初级开发工程师']
  },
  {
    company: '字节跳动',
    position: '全栈开发工程师',
    duration: '2019.06 - 2021.02',
    description: '负责移动端H5应用和后台管理系统开发，使用React+Node.js技术栈，参与产品从0到1的开发过程。',
    achievements: ['开发了多个核心业务模块', '优化了数据库查询性能，响应时间减少60%', '参与了微服务架构的设计和实现']
  },
  {
    company: '阿里巴巴',
    position: '前端开发工程师',
    duration: '2018.07 - 2019.05',
    description: '负责电商平台的前端开发工作，使用Vue.js开发用户界面，与后端团队协作完成产品功能开发。',
    achievements: ['完成了多个重要页面的开发', '参与了前端工程化建设', '获得了年度优秀员工奖']
  }
])

// 项目作品数据
const projects = reactive([
  {
    title: '企业级管理系统',
    description: '基于Vue3+TypeScript+Element Plus开发的企业级后台管理系统，支持多租户、权限管理、数据可视化等功能。',
    tech: ['Vue3', 'TypeScript', 'Element Plus', 'Pinia', 'Vite'],
    image: 'https://via.placeholder.com/300x200',
    demo: 'https://demo.example.com',
    github: 'https://github.com/example/admin-system',
    status: '已完成'
  },
  {
    title: '移动端电商应用',
    description: '使用React Native开发的跨平台移动电商应用，支持商品浏览、购物车、订单管理、支付等功能。',
    tech: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
    image: 'https://via.placeholder.com/300x200',
    demo: 'https://app.example.com',
    github: 'https://github.com/example/mobile-shop',
    status: '开发中'
  },
  {
    title: '实时聊天系统',
    description: '基于WebSocket的实时聊天系统，支持文字、图片、文件传输，具有群聊、私聊、消息推送等功能。',
    tech: ['Vue.js', 'Socket.io', 'Express.js', 'Redis'],
    image: 'https://via.placeholder.com/300x200',
    demo: 'https://chat.example.com',
    github: 'https://github.com/example/chat-system',
    status: '已完成'
  }
])

// 技术文章数据
const articles = reactive([
  {
    title: 'Vue3 Composition API 最佳实践',
    summary: '深入探讨Vue3 Composition API的使用技巧和最佳实践，包括响应式数据管理、生命周期钩子、自定义组合函数等。',
    category: '前端技术',
    publishDate: '2024-01-15',
    readTime: '8分钟',
    tags: ['Vue3', 'JavaScript', '前端'],
    url: '#'
  },
  {
    title: 'Node.js 微服务架构设计与实现',
    summary: '详细介绍如何使用Node.js构建微服务架构，包括服务拆分、API网关、服务发现、负载均衡等核心概念。',
    category: '后端开发',
    publishDate: '2024-01-10',
    readTime: '12分钟',
    tags: ['Node.js', '微服务', '架构'],
    url: '#'
  },
  {
    title: 'Docker 容器化部署实战指南',
    summary: '从基础概念到实际应用，全面介绍Docker容器化技术，包括镜像构建、容器编排、CI/CD集成等。',
    category: 'DevOps',
    publishDate: '2024-01-05',
    readTime: '10分钟',
    tags: ['Docker', 'DevOps', '部署'],
    url: '#'
  }
])

// 联系方式数据
const contactInfo = reactive({
  socialMedia: [
    { platform: 'GitHub', username: '@zhangsan', url: 'https://github.com/zhangsan', icon: '🐙' },
    { platform: 'LinkedIn', username: '张三', url: 'https://linkedin.com/in/zhangsan', icon: '💼' },
    { platform: 'Twitter', username: '@zhangsan_dev', url: 'https://twitter.com/zhangsan_dev', icon: '🐦' },
    { platform: '掘金', username: '张三的技术分享', url: 'https://juejin.cn/user/zhangsan', icon: '💎' }
  ],
  email: 'zhangsan@example.com',
  phone: '+86 138-0000-0000',
  address: '北京市朝阳区xxx街道xxx号'
})

// 当前选中的菜单项
const activeMenu = ref('about')
const activeSubMenu = ref('personal-info')

// 切换菜单
const switchMenu = (menuId: string, subMenuId?: string) => {
  activeMenu.value = menuId
  if (subMenuId) {
    activeSubMenu.value = subMenuId
  }
}

// 菜单选项
const menuOptions = computed(() => {
  const options: any[] = []
  
  blogMenu.forEach(menu => {
    const menuOption = {
      label: menu.title,
      key: menu.id,
      icon: menu.icon,
      children: menu.children.map(child => ({
        label: child.title,
        key: child.id
      }))
    }
    options.push(menuOption)
  })
  
  return options
})
</script>

<template>
  <n-layout class="blog-layout" has-sider style="height: 100%">
    <!-- 左侧菜单 -->
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="280"
      :collapsed="false"
      show-trigger
      style="height: 100%"
    >
      <div class="blog-menu">
        <div class="menu-header">
          <n-avatar
            :size="60"
            :src="personalInfo.avatar"
            round
          />
          <div class="user-info">
            <n-text strong class="user-name">{{ personalInfo.name }}</n-text>
            <n-text depth="3" class="user-title">{{ personalInfo.title }}</n-text>
          </div>
        </div>
        
        <n-menu
          v-model:value="activeSubMenu"
          :collapsed="false"
          :options="menuOptions"
          class="blog-menu-list"
        />
      </div>
    </n-layout-sider>

    <!-- 右侧内容区域 -->
    <n-layout class="content-area">
        <n-layout-content class="main-content">
        <!-- 个人信息 -->
        <div id="personal-info" class="content-section">
          <n-card title="个人信息" class="section-card">
            <div class="personal-info-content">
              <div class="info-header">
                <n-avatar
                  :size="120"
                  :src="personalInfo.avatar"
                  round
                />
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
                    <n-icon><svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg></n-icon>
                    <n-text>{{ personalInfo.location }}</n-text>
                  </div>
                </n-gi>
                <n-gi>
                  <div class="info-item">
                    <n-icon><svg viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></n-icon>
                    <n-text>{{ personalInfo.email }}</n-text>
                  </div>
                </n-gi>
                <n-gi>
                  <div class="info-item">
                    <n-icon><svg viewBox="0 0 24 24"><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg></n-icon>
                    <n-text>{{ personalInfo.phone }}</n-text>
                  </div>
                </n-gi>
                <n-gi>
                  <div class="info-item">
                    <n-icon><svg viewBox="0 0 24 24"><path fill="currentColor" d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg></n-icon>
                    <n-text>{{ personalInfo.website }}</n-text>
                  </div>
                </n-gi>
              </n-grid>
            </div>
          </n-card>
        </div>

        <!-- 技能专长 -->
        <div id="skills" class="content-section">
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
        <div id="experience" class="content-section">
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
                    <n-list-item v-for="achievement in exp.achievements" :key="achievement">
                      <n-text depth="3">• {{ achievement }}</n-text>
                    </n-list-item>
                  </n-list>
                </div>
              </n-timeline-item>
            </n-timeline>
          </n-card>
        </div>

        <!-- Web项目 -->
        <div id="web-projects" class="content-section">
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
        </div>

        <!-- 技术文章 -->
        <div id="frontend" class="content-section">
          <n-card title="技术文章" class="section-card">
            <n-list>
              <n-list-item v-for="article in articles" :key="article.title">
                <n-card class="article-card" hoverable>
                  <div class="article-content">
                    <div class="article-header">
                      <n-h3 class="article-title">{{ article.title }}</n-h3>
                      <n-space>
                        <n-tag size="small" type="info">{{ article.category }}</n-tag>
                        <n-text depth="3" class="article-meta">{{ article.publishDate }} · {{ article.readTime }}</n-text>
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
        <div id="social-media" class="content-section">
          <n-card title="联系方式" class="section-card">
            <n-grid :cols="2" :x-gap="24" :y-gap="20">
              <n-gi>
                <n-h3>社交媒体</n-h3>
                <n-list>
                  <n-list-item v-for="social in contactInfo.socialMedia" :key="social.platform">
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
                    <n-icon><svg viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></n-icon>
                    <n-text>{{ contactInfo.email }}</n-text>
                  </div>
                  <div class="contact-item">
                    <n-icon><svg viewBox="0 0 24 24"><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg></n-icon>
                    <n-text>{{ contactInfo.phone }}</n-text>
                  </div>
                  <div class="contact-item">
                    <n-icon><svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg></n-icon>
                    <n-text>{{ contactInfo.address }}</n-text>
                  </div>
                </n-space>
              </n-gi>
            </n-grid>
          </n-card>
        </div>
      </n-layout-content>
      
      <!-- 锚点导航 -->
      <n-anchor affix style="width: 200px;" :bound="120">
        <n-anchor-link title="个人信息" href="#personal-info" />
        <n-anchor-link title="技能专长" href="#skills" />
        <n-anchor-link title="工作经历" href="#experience" />
        <n-anchor-link title="Web项目" href="#web-projects" />
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

// 右侧内容区域
.content-area {
  height: 100%;
  > ::v-deep(.n-layout-scroll-container) {
    display: flex;
    flex-direction: row;
  }
  .main-content {
    padding: 24px;
    background: #f8f9fa;
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
        color: #667eea;
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
      color: #667eea;
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
    color: #667eea;
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
  
  .skill-category .skill-title {
    color: #e2e8f0;
  }
  
  .project-card .project-content .project-info .project-header .project-title {
    color: #e2e8f0;
  }
  
  .article-card .article-content .article-header .article-title {
    color: #e2e8f0;
  }
}
</style>
