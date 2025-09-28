# dzx-blog

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```
# dzx-blog-webpro
个人博客

## 项目介绍
这是一个基于Vue 3 + TypeScript + Naive UI的个人博客项目，采用现代化的技术栈和设计理念。

## 主题色系
项目采用统一的紫色主题色系：
- 主色调：`#8a2be2` (蓝紫色)
- 悬停色：`rgba(157, 77, 231, 1)` (浅紫色)
- 按下色：`rgba(121, 38, 199, 1)` (深紫色)
- 背景色：`#fffefaFF` (米白色)

## 功能特性
- 🎨 统一的主题色系设计
- 🌙 支持明暗主题切换
- 📱 响应式设计，适配各种设备
- 🎯 个人简历展示
- 📝 技术文章管理（支持Markdown渲染）
- 🎪 轮播图展示
- 🔍 代码高亮显示
- 📖 文章列表和详情页面

## 技术栈
- Vue 3 + TypeScript
- Naive UI 组件库
- Vite 构建工具
- Pinia 状态管理
- Vue Router 路由管理
- Markdown-it (Markdown渲染)
- Highlight.js (代码高亮)

## Markdown文章功能

### 功能说明
本项目支持渲染本地Markdown文件，提供完整的文章管理功能：

- **文章列表页面** (`/xiao/article/list`): 显示所有markdown文件的列表
- **文章详情页面** (`/xiao/article/:id`): 渲染单个markdown文件内容
- **自动解析**: 自动提取文章标题、摘要、标签等信息
- **代码高亮**: 支持多种编程语言的语法高亮
- **响应式设计**: 适配各种设备尺寸

### 使用方法

1. **添加文章**: 将markdown文件放入 `src/assets/mds/` 目录
2. **文件命名**: 建议使用有意义的文件名，如 `vue3-composition-api.md`
3. **文章格式**: 支持标准markdown语法，包括：
   - 标题 (# ## ###)
   - 代码块 (```language)
   - 列表、表格、链接等
   - 图片、引用等

### 技术实现

- **Markdown渲染**: 使用 `markdown-it` 库将markdown转换为HTML
- **代码高亮**: 使用 `highlight.js` 提供语法高亮
- **文件读取**: 通过Vite的 `import.meta.glob` 动态导入markdown文件
- **路由管理**: 支持文章列表和详情页面的路由跳转

### 文件结构
```
src/
├── services/
│   └── markdownService.ts    # Markdown渲染服务
├── views/xu/components/
│   ├── ArticleList.vue       # 文章列表组件
│   ├── ArticleDetail.vue     # 文章详情组件
│   └── Frontend.vue          # 前端技术文章组件
└── assets/mds/               # Markdown文件目录
    ├── vue3-composition-api.md
    ├── docker-deployment.md
    └── ...
```

### 快速开始
1. 将markdown文件放入 `src/assets/mds/` 目录
2. 访问 `/xiao/article/list` 查看所有文章
3. 访问 `/xiao/article/frontend` 查看前端技术文章
4. 点击文章标题查看详情页面

> 📖 详细使用指南请参考 [MARKDOWN_GUIDE.md](./MARKDOWN_GUIDE.md)

## 开发记录

### 2024年Markdown文章系统
- 集成了markdown-it和highlight.js，实现完整的markdown渲染功能
- 创建了文章列表和详情页面，支持动态路由
- 实现了自动文章解析，提取标题、摘要、标签等信息
- 添加了代码高亮、响应式设计等用户体验优化
- 支持多种markdown语法，包括代码块、表格、链接等

### 2024年主题色系优化
- 统一了main-content区域的色系，使用项目主题紫色系
- 更新了个人信息、技能、项目、文章等模块的标题颜色
- 优化了图标颜色，保持视觉一致性
- 完善了深色主题下的颜色适配

### 2024年菜单系统重构
- 将左侧菜单从Xiao.vue迁移到XuSider.vue组件中
- 实现了基于xiaoRoutes的动态菜单生成
- 菜单结构完全由路由配置驱动，支持自动排序
- 添加了路由导航功能，点击菜单项自动跳转到对应页面
- 支持菜单折叠/展开和用户信息显示
