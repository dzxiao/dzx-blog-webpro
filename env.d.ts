/// <reference types="vite/client" />
interface Window {

  /** 将naive常用组件挂在至window */
  $loadingBar: import('naive-ui').LoadingBarProviderInst;
  $dialog: import('naive-ui').DialogProviderInst;
  $message: import('naive-ui').MessageProviderInst;
  $notification: import('naive-ui').NotificationProviderInst;
}
declare module '@kangc/v-md-editor/lib/preview';
declare module '@kangc/v-md-editor';
declare module '@kangc/v-md-editor/lib/theme/vuepress.js';
declare module '@kangc/v-md-editor/lib/plugins/mermaid/cdn';
declare module '@kangc/v-md-editor/lib/plugins/line-number/index';
declare module '@kangc/v-md-editor/lib/plugins/copy-code/index';
declare module '@kangc/v-md-editor/lib/plugins/emoji/index';
declare module '@kangc/v-md-editor/lib/plugins/tip/index';
declare module '@kangc/v-md-editor/lib/plugins/todo-list/index';
declare module '@kangc/v-md-editor/lib/plugins/highlight-lines/index';
