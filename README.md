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
- 📝 技术文章管理
- 🎪 轮播图展示

## 技术栈
- Vue 3 + TypeScript
- Naive UI 组件库
- Vite 构建工具
- Pinia 状态管理
- Vue Router 路由管理

## 开发记录
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
