<script setup lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';
import { NConfigProvider, zhCN, dateZhCN, darkTheme, NLoadingBarProvider, NGlobalStyle } from 'naive-ui';
import { useThemeStore } from '@/stores/pinia';
import { lightThemeOverrides, darkThemeOverrides, loadingBarLightTheme, loadingBarDarkTheme } from '@/styles/index';
import Index from '@/layout/index.vue';
import Commons from '@/components/commons.vue';
defineComponent({
  components: {
    NConfigProvider,
    NLoadingBarProvider,
    Index,
    Commons,
    NGlobalStyle
  },
});

const themeStore = useThemeStore();
const theme: any = ref(darkTheme);
watchEffect(() => {
  if (themeStore.THEME_DARK) {
    // document.getElementsByTagName('html')[0].classList.add('dark');
    theme.value = darkTheme;
  } else {
    theme.value = null;
    // document.getElementsByTagName('html')[0].classList.remove('dark');
  }
});
</script>

<template>
  <Commons />
  <!-- <n-config-provider wh-full :locale="zhCN" :date-locale="dateZhCN" :theme="theme"
    :theme-overrides="theme === null ? lightThemeOverrides : darkThemeOverrides"> -->
    <n-loading-bar-provider>
      <Index />
    </n-loading-bar-provider>
    <n-global-style />
  <!-- </n-config-provider> -->
</template>

<style>
html,
body {
  padding: 0;
  margin: 0;
}

#app {
  width: 100%;
  height: 100%;
}
</style>
