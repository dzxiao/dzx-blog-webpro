import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
// 主题
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
// 提示 
import createTipPlugin from '@kangc/v-md-editor/lib/plugins/tip/index';
import '@kangc/v-md-editor/lib/plugins/tip/tip.css';
// emoji
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index';
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css';
// todo-list
import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list/index';
import '@kangc/v-md-editor/lib/plugins/todo-list/todo-list.css';
// line-number
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';
// high-line
import createHighlightLinesPlugin from '@kangc/v-md-editor/lib/plugins/highlight-lines/index';
import '@kangc/v-md-editor/lib/plugins/highlight-lines/highlight-lines.css';
// copy-code 
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';

// @ts-ignore
import Prism from 'prismjs';

VMdEditor.use(vuepressTheme, {
  Prism,
  extend(md: any) {
    // md为 markdown-it 实例，可以在此处进行修改配置,并使用 plugin 进行语法扩展
    // md.set(option).use(plugin);
  },
  codeHighlightExtensionMap: {
    vue: 'xml'
  }
});
VMdEditor.use(createTipPlugin()).use(createEmojiPlugin()).use(createTodoListPlugin()).use(createLineNumbertPlugin()).use(createCopyCodePlugin()).use(createHighlightLinesPlugin());
export {
  VMdEditor
}