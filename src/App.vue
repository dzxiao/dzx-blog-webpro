<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { defineComponent, ref, watchEffect } from 'vue';
import { NConfigProvider, zhCN, dateZhCN, darkTheme } from 'naive-ui';
import { useThemeStore } from '@/stores/pinia';
defineComponent({
  components: {
    NConfigProvider
  },
});
const themeStore = useThemeStore();
const theme: any = ref(darkTheme);
watchEffect(() => {
  if(themeStore.THEME_DARK){
    document.getElementsByTagName('html')[0].classList.add('dark');
    theme.value = darkTheme;
  }else{
    theme.value = null;
    document.getElementsByTagName('html')[0].classList.remove('dark');
  }
});
</script>

<template>
  <n-config-provider wh-full :locale="zhCN" :date-locale="dateZhCN" :theme="theme">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </n-config-provider>
</template>

<style>
html,
body {
  padding: 0;
  margin: 0;
}
</style>
