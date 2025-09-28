<template>
  <n-layout-content class="main-content">
    <div class="article-list-container">
      <!-- 页面标题 -->
      <n-card class="page-header">
        <template #header>
          <div class="header-content">
            <h1 class="page-title">📝 技术文章</h1>
          </div>
        </template>
        <p class="page-subtitle">分享前端开发经验和技术心得</p>
      </n-card>

      <!-- 文章列表 -->
      <div class="articles-list">
        <n-card
          v-for="article in articles"
          :key="article.id"
          class="article-card"
          hoverable
          @click="goToArticle(article.id)"
        >
          <template #header>
            <div class="article-header">
              <h3 class="article-title">{{ article.title }}</h3>
            </div>
          </template>
          <div class="article-meta">
            <n-tag type="info" size="small">{{ article.publishDate }}</n-tag>
          </div>
          <div class="article-content">
            <p class="article-summary">{{ article.summary }}</p>

            <div class="article-tags">
              <n-tag
                v-for="tag in article.tags.slice(0, 5)"
                :key="tag"
                size="small"
                type="default"
                class="tag"
              >
                {{ tag }}
              </n-tag>
              <span v-if="article.tags.length > 5" class="more-tags">
                +{{ article.tags.length - 5 }}
              </span>
            </div>
          </div>

          <template #action>
            <div class="article-actions">
              <n-button
                type="primary"
                size="small"
                @click.stop="goToArticle(article.id)"
              >
                阅读全文
              </n-button>
            </div>
          </template>
        </n-card>
      </div>

      <!-- 加载状态 -->
      <div v-if="loading" class="loading-container">
        <n-spin size="large">
          <div class="loading-text">正在加载文章...</div>
        </n-spin>
      </div>

      <!-- 空状态 -->
      <div v-if="!loading && articles.length === 0" class="empty-container">
        <n-empty description="暂无文章">
          <template #icon>
            <n-icon size="48">
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"
                />
              </svg>
            </n-icon>
          </template>
        </n-empty>
      </div>
    </div>
  </n-layout-content>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { getAllArticles, type Article } from "@/services/markdownService";

const router = useRouter();
const articles = ref<Article[]>([]);
const loading = ref(true);

// 获取文章列表
const fetchArticles = async () => {
  try {
    loading.value = true;
    articles.value = await getAllArticles();
  } catch (error) {
    console.error("获取文章列表失败:", error);
    // 可以在这里添加错误提示
  } finally {
    loading.value = false;
  }
};

// 跳转到文章详情页
const goToArticle = (articleId: string) => {
  router.push(`/xiao/article/${articleId}`);
};

onMounted(() => {
  fetchArticles();
});
</script>

<style scoped lang="less">
.article-list-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.page-header {
  margin-bottom: 30px;
  text-align: center;

  .header-content {
    .page-title {
      font-size: 2.5rem;
      font-weight: bold;
      color: #8a2be2;
    }
  }
  .page-subtitle {
    font-size: 1.1rem;
    color: #666;
    margin: 0 0 10px 0;
  }
}

.articles-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
}

.article-card {
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(138, 43, 226, 0.15);
    border-color: #8a2be2;
  }

  .article-header {
    .article-title {
      font-size: 1.3rem;
      font-weight: 600;
      color: #333;
      line-height: 1.4;
    }
  }
  .article-meta {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 10px 0;
  }

  .article-content {
    .article-summary {
      margin: 0 0 15px 0;
      color: #666;
      line-height: 1.6;
      font-size: 0.95rem;
    }

    .article-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      align-items: center;

      .tag {
        background-color: #f5f5f5;
        color: #666;
        border: none;
      }

      .more-tags {
        font-size: 0.8rem;
        color: #999;
      }
    }
  }

  .article-actions {
    display: flex;
    justify-content: flex-end;
  }
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;

  .loading-text {
    margin-top: 10px;
    color: #666;
  }
}

.empty-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
}

// 响应式设计
@media (max-width: 768px) {
  .article-list-container {
    padding: 15px;
  }

  .articles-list {
    gap: 15px;
  }

  .page-header .header-content .page-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .article-card {
    .article-header .article-title {
      font-size: 1.1rem;
    }

    .article-content .article-summary {
      font-size: 0.9rem;
    }
  }
}
</style>
