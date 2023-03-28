# Markdown
---
### 1. 什么是Markdown（.md文件）

Markdown 是一种[轻量级标记语言](https://baike.baidu.com/item/轻量级标记语言/52671915?fromModule=lemma_inlink)，创始人为约翰·格鲁伯（John Gruber）。 它允许人们使用易读易写的[纯文本格式](https://baike.baidu.com/item/纯文本格式/9862288?fromModule=lemma_inlink)编写文档，然后转换成有效的 [XHTML](https://baike.baidu.com/item/XHTML/316621?fromModule=lemma_inlink)（或者HTML）文档。这种语言吸收了很多在[电子邮件](https://baike.baidu.com/item/电子邮件/111106?fromModule=lemma_inlink)中已有的纯文本标记的特性。

由于 Markdown 的轻量化、易读易写特性，并且对于图片，图表、数学式都有支持，许多网站都广泛使用 Markdown 来撰写帮助文档或是用于论坛上发表消息。 如 [GitHub](https://baike.baidu.com/item/GitHub/10145341?fromModule=lemma_inlink)、[Reddit](https://baike.baidu.com/item/Reddit/1272010?fromModule=lemma_inlink)、[Diaspora](https://baike.baidu.com/item/Diaspora/10726893?fromModule=lemma_inlink)、[Stack Exchange](https://baike.baidu.com/item/Stack Exchange/13777796?fromModule=lemma_inlink)、[OpenStreetMap](https://baike.baidu.com/item/OpenStreetMap/3171606?fromModule=lemma_inlink) 、[SourceForge](https://baike.baidu.com/item/SourceForge/6562141?fromModule=lemma_inlink)、简书等，甚至还能被使用来撰写[电子书](https://baike.baidu.com/item/电子书/346054?fromModule=lemma_inlink)。

### 2. Typora编辑器

typora是一款轻便简洁的Markdown编辑器。

typora支持即时渲染技术，这也是与其他Markdown编辑器最显著的区别，将写作与预览窗口相结合，为用户呈现所见即所得的编辑模式，支持Markdown的各种基础语法，支持快捷键操作，是好用的一款Markdown编辑器。

即时渲染使得你写Markdown就想是写Word文档一样流畅自如，不像其他编辑器的有编辑栏和显示栏。Typora 拥有 Windows、macOS客户端，可以算作一款 Windows 下难得的好看、优美的客户端。

### 3. md文件语法

​	下篇 :grinning:

<br/>

----

# v-md-editor(插件)

::: tip
  v-md-editor 是基于 Vue 开发的 markdown 编辑器组件
:::

### 1. 市场上如此之多的Md解析文件，为何偏偏选用Ta？:point_up:

* [markdown-loader](https://www.npmjs.com/package/markdown-loader)
  * 技术栈：webpack2+，个人项目使用的vue3+ts+vite
* [vue-markdown](https://www.npmjs.com/package/vue-markdown)
  * 更新日志显示上个版本久远，目测不支持vue3，无选择
* [v-md-editor](https://link.juejin.cn/?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40kangc%2Fv-md-editor)
  * 中文文档
  * 支持vue3、vite框架
  * 组件丰富：编辑器组件、预览组件、html预览组件。可按需使用

### 2. v-md-editor 安装（支持vue3版本，其他版本可上官网查看​ :airplane:）

```js {2,5,8}
# 使用 npm
npm i @kangc/v-md-editor@next -S

# 使用 yarn
yarn add @kangc/v-md-editor@next

# 使用 pnpm 
pnpm add @kangc/v-md-editor@next -S
```

### 3. 项目引入 :sparkles:

```js
// 引入编辑器
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
// 引入主题
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

// 以下是v-md-editor提供的插件，如不需要可跳过
// 引入提示 (使用vuepress主题后可省略，vuepress主题已内置)
import createTipPlugin from '@kangc/v-md-editor/lib/plugins/tip/index';
import '@kangc/v-md-editor/lib/plugins/tip/tip.css';
// 引入emoji 
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index';
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css';
// 引入todo-list
import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list/index';
import '@kangc/v-md-editor/lib/plugins/todo-list/todo-list.css';
// 引入line-number(代码块中的行号)
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';
// 引入copy-code(右上角显示复制按钮)
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';

// 引入代码高亮插件(此步还需单独npm)
// @ts-ignore
import Prism from 'prismjs';

VMdEditor.use(vuepressTheme, {
  Prism,
  extend(md: any) {
    // md为 markdown-it 实例，可以在此处进行修改配置,并使用 plugin 进行语法扩展
    // md.set(option).use(plugin);
  },
});
VMdEditor.use(createTipPlugin()).use(createEmojiPlugin()).use(createTodoListPlugin()).use(createLineNumbertPlugin()).use(createCopyCodePlugin());

/**
*	将此文件单独封装，后续引入项目main.ts
*/
export {
  VMdEditor
}
```

### 4. 新建*.vue文件 :heavy_plus_sign:

```vue
<script setup lang="ts">
import { ref } from 'vue';
// 在引入静态md文件资源时，在.md后面加上?raw 否则vite将会报错
import markdownTxt from '*.md?raw';
const md = ref(markdownTxt);
</script>
<template>
	<!-- 这里我只需要预览 所以mode指定为preview -->
	<!-- 后续在问题中讲解为何不直接使用预览组件 -->
	<v-md-editor :model-value="md" mode="preview"></v-md-editor>
</template>
```

### 5. 遇到的问题 :question:

* 只是用预览组件不识别代码块的languages语种，console直接报错

  ```js
  // markdown.js
  import VMdPreview from '@kangc/v-md-editor/lib/preview';
  import '@kangc/v-md-editor/lib/style/preview.css';
  
  .....
  
  // *.vue文件
  <v-md-preview :text="text"></v-md-preview>
  // text属性可能只是别文字之类的，所以在使用代码块的时候抛出异常
  ```

* 如遇其他问题可在官网查看，也列出了一些[常见问题](http://ckang1229.gitee.io/vue-markdown-editor/zh/question.html)