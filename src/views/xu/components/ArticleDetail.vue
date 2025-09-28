<template>
  <n-layout-content class="main-content">
    <div class="article-detail-container">
      <!-- 返回按钮 -->
      <div class="back-button">
        <n-button @click="goBack" type="default" size="small">
          <template #icon>
            <n-icon>
              <svg viewBox="0 0 24 24">
                <path fill="currentColor" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
              </svg>
            </n-icon>
          </template>
          返回文章列表
        </n-button>
      </div>

      <!-- 文章内容 -->
      <div v-if="article" class="article-content">
        <!-- 文章头部信息 -->
        <n-card class="article-header">
          <template #header>
            <h1 class="article-title">{{ article.title }}</h1>
          </template>
          <div class="article-meta">
            <div class="meta-item">
              <n-icon size="16">
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M15.5,8L10,13.5L8.5,12L7,13.5L10,16.5L17,9.5L15.5,8Z" />
                </svg>
              </n-icon>
              <span>{{ article.publishDate }}</span>
            </div>
            <div class="meta-item">
              <n-icon size="16">
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
              </n-icon>
              <span>{{ article.filename }}</span>
            </div>
          </div>
          
          <!-- 标签 -->
          <div class="article-tags">
            <n-tag 
              v-for="tag in article.tags" 
              :key="tag"
              type="info"
              size="small"
              class="tag"
            >
              {{ tag }}
            </n-tag>
          </div>
        </n-card>

        <!-- 文章正文 -->
        <n-card title="正文" class="article-body">
          <div 
            class="markdown-content"
            v-html="article.htmlContent"
          ></div>
        </n-card>
      </div>

      <!-- 加载状态 -->
      <div v-if="loading" class="loading-container">
        <n-spin size="large">
          <div class="loading-text">正在加载文章...</div>
        </n-spin>
      </div>

      <!-- 错误状态 -->
      <div v-if="error" class="error-container">
        <n-result status="error" title="文章加载失败" :description="error">
          <template #footer>
            <n-button @click="goBack">返回文章列表</n-button>
          </template>
        </n-result>
      </div>
    </div>
  </n-layout-content>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getArticleById, type Article } from '@/services/markdownService';

const router = useRouter();
const route = useRoute();
const article = ref<Article | null>(null);
const loading = ref(true);
const error = ref<string>('');

// 获取文章详情
const fetchArticle = async () => {
  try {
    loading.value = true;
    error.value = '';
    
    const articleId = route.params.id as string;
    if (!articleId) {
      throw new Error('文章ID不能为空');
    }
    
    const articleData = await getArticleById(articleId);
    if (!articleData) {
      throw new Error('文章不存在');
    }
    
    article.value = articleData;
  } catch (err) {
    console.error('获取文章失败:', err);
    error.value = err instanceof Error ? err.message : '未知错误';
  } finally {
    loading.value = false;
  }
};

// 返回文章列表
const goBack = () => {
  router.push('/xiao/article');
};

onMounted(() => {
  fetchArticle();
});
</script>

<style scoped lang="less">
.article-detail-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.back-button {
  margin-bottom: 20px;
}

.article-content {
  .article-header {
    margin-bottom: 20px;
    
    .article-title {
      margin: 0 0 20px 0;
      font-size: 2.2rem;
      font-weight: bold;
      color: #333;
      line-height: 1.3;
    }
    
    .article-meta {
      display: flex;
      gap: 20px;
      margin-bottom: 15px;
      
      .meta-item {
        display: flex;
        align-items: center;
        gap: 5px;
        color: #666;
        font-size: 0.9rem;
      }
    }
    
    .article-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      
      .tag {
        background-color: #f0f0f0;
        color: #666;
        border: none;
      }
    }
  }
  
  .article-body {
    .markdown-content {
      line-height: 1.8;
      color: #333;
      
      // 标题样式
      :deep(h1), :deep(h2), :deep(h3), :deep(h4), :deep(h5), :deep(h6) {
        margin-top: 30px;
        margin-bottom: 15px;
        font-weight: 600;
        color: #8a2be2;
        
        &:first-child {
          margin-top: 0;
        }
      }
      
      :deep(h1) {
        font-size: 1.8rem;
        border-bottom: 2px solid #8a2be2;
        padding-bottom: 10px;
      }
      
      :deep(h2) {
        font-size: 1.5rem;
        border-bottom: 1px solid #e0e0e0;
        padding-bottom: 8px;
      }
      
      :deep(h3) {
        font-size: 1.3rem;
      }
      
      :deep(h4) {
        font-size: 1.1rem;
      }
      
      // 段落样式
      :deep(p) {
        margin-bottom: 15px;
        text-align: justify;
      }
      
      // 代码块样式
      :deep(pre) {
        background-color: #f8f8f8;
        border: 1px solid #e0e0e0;
        border-radius: 6px;
        padding: 15px;
        margin: 20px 0;
        overflow-x: auto;
        
        code {
          background: none;
          padding: 0;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 0.9rem;
          line-height: 1.5;
        }
      }
      
      // 行内代码样式
      :deep(code) {
        background-color: #f0f0f0;
        padding: 2px 6px;
        border-radius: 3px;
        font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
        font-size: 0.9rem;
        color: #d63384;
      }
      
      // 列表样式
      :deep(ul), :deep(ol) {
        margin-bottom: 15px;
        padding-left: 25px;
        
        li {
          margin-bottom: 8px;
        }
      }
      
      // 引用样式
      :deep(blockquote) {
        border-left: 4px solid #8a2be2;
        padding-left: 15px;
        margin: 20px 0;
        color: #666;
        font-style: italic;
        background-color: #f9f9f9;
        padding: 15px;
        border-radius: 0 6px 6px 0;
      }
      
      // 表格样式
      :deep(table) {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
        
        th, td {
          border: 1px solid #e0e0e0;
          padding: 10px;
          text-align: left;
        }
        
        th {
          background-color: #f5f5f5;
          font-weight: 600;
        }
        
        tr:nth-child(even) {
          background-color: #f9f9f9;
        }
      }
      
      // 链接样式
      :deep(a) {
        color: #8a2be2;
        text-decoration: none;
        
        &:hover {
          text-decoration: underline;
        }
      }
      
      // 图片样式
      :deep(img) {
        max-width: 100%;
        height: auto;
        border-radius: 6px;
        margin: 15px 0;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      
      // 分割线样式
      :deep(hr) {
        border: none;
        height: 2px;
        background: linear-gradient(to right, transparent, #8a2be2, transparent);
        margin: 30px 0;
      }
    }
  }
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  
  .loading-text {
    margin-top: 10px;
    color: #666;
  }
}

.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
}

// 响应式设计
@media (max-width: 768px) {
  .article-detail-container {
    padding: 15px;
  }
  
  .article-content .article-header .article-title {
    font-size: 1.8rem;
  }
  
  .article-content .article-header .article-meta {
    flex-direction: column;
    gap: 10px;
  }
  
  .article-content .article-body .markdown-content {
    :deep(pre) {
      padding: 10px;
      font-size: 0.8rem;
    }
    
    :deep(table) {
      font-size: 0.9rem;
      
      th, td {
        padding: 8px;
      }
    }
  }
}

@media (max-width: 480px) {
  .article-content .article-header .article-title {
    font-size: 1.5rem;
  }
  
  .article-content .article-body .markdown-content {
    :deep(h1) {
      font-size: 1.5rem;
    }
    
    :deep(h2) {
      font-size: 1.3rem;
    }
    
    :deep(h3) {
      font-size: 1.1rem;
    }
  }
}
</style>
