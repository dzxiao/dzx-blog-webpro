/// <reference types="vite/client" />
interface Window {

  /** 将naive常用组件挂在至window */
  $loadingBar: import('naive-ui').LoadingBarProviderInst;
  $dialog: import('naive-ui').DialogProviderInst;
  $message: import('naive-ui').MessageProviderInst;
  $notification: import('naive-ui').NotificationProviderInst;
}