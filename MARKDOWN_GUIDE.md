# Markdown文章系统使用指南

## 功能概述

本项目已经成功集成了markdown-it和highlight.js，实现了完整的markdown文章渲染功能。你可以轻松地将markdown文件添加到项目中，系统会自动渲染并展示。

## 使用方法

### 1. 添加文章

将你的markdown文件放入 `src/assets/mds/` 目录中。系统会自动扫描这个目录下的所有 `.md` 文件。

**示例文件结构：**
```
src/assets/mds/
├── vue3-composition-api.md
├── docker-deployment-guide.md
├── react-hooks-best-practices.md
└── css-grid-layout.md
```

### 2. 文章格式

支持标准markdown语法，包括：

- **标题**: `# 一级标题`, `## 二级标题`, `### 三级标题`
- **代码块**: 
  ```javascript
  // 支持语法高亮
  const hello = 'world';
  ```
- **列表**: 有序列表和无序列表
- **表格**: 标准markdown表格
- **链接**: `[链接文本](URL)`
- **图片**: `![图片描述](图片URL)`
- **引用**: `> 引用内容`

### 3. 访问文章

- **文章列表**: 访问 `/xiao/article/list` 查看所有文章
- **前端技术**: 访问 `/xiao/article/frontend` 查看前端相关文章
- **文章详情**: 访问 `/xiao/article/文章ID` 查看具体文章内容

### 4. 自动功能

系统会自动：
- 提取文章标题（第一个 `#` 标题）
- 生成文章摘要（前200个字符）
- 从文件名和内容中提取标签
- 提供代码语法高亮
- 支持响应式设计

## 技术实现

### 核心文件

- `src/services/markdownService.ts`: markdown渲染服务
- `src/views/xu/components/ArticleList.vue`: 文章列表组件
- `src/views/xu/components/ArticleDetail.vue`: 文章详情组件
- `src/views/xu/components/Frontend.vue`: 前端技术文章组件

### 技术栈

- **markdown-it**: markdown解析和渲染
- **highlight.js**: 代码语法高亮
- **Vue 3**: 前端框架
- **TypeScript**: 类型安全
- **Naive UI**: UI组件库

## 自定义配置

### 修改代码高亮主题

在 `src/services/markdownService.ts` 中修改：
```typescript
import 'highlight.js/styles/github.css'; // 改为你喜欢的主题
```

### 添加新的文章分类

1. 在 `src/router/xiaoRoutes.ts` 中添加新的路由
2. 创建对应的组件文件
3. 在组件中使用 `getAllArticles()` 筛选文章

### 自定义文章解析

在 `src/services/markdownService.ts` 的 `parseMarkdownContent` 函数中修改解析逻辑。

## 示例文章

你可以参考 `src/assets/mds/` 目录下的现有文章，了解markdown格式和渲染效果。

## 注意事项

1. 文件名建议使用英文和连字符，如 `vue3-composition-api.md`
2. 文章标题会自动从第一个 `#` 标题提取
3. 代码块需要指定语言才能获得语法高亮
4. 图片需要提供完整的URL路径
5. 系统会自动处理markdown到HTML的转换

## 故障排除

如果文章没有显示：
1. 检查文件是否在 `src/assets/mds/` 目录中
2. 确认文件扩展名是 `.md`
3. 检查浏览器控制台是否有错误信息
4. 确认markdown文件格式正确

## 更新日志

- **2024年**: 完成markdown-it和highlight.js集成
- 支持文章列表和详情页面
- 实现自动文章解析和标签提取
- 添加代码语法高亮功能
- 优化响应式设计和用户体验
