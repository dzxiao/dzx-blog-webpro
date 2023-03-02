<script setup lang="ts">
import { useThemeStore } from '@/stores/pinia';
import { storeToRefs } from 'pinia';
const themeStore = useThemeStore();
const switchTheme = (type: string) => {
  themeStore.changeTheme(type);
}

</script>

<template>
  <div>首页</div>
  <n-button @click="switchTheme('dark')">深色</n-button>
  <n-button type="primary" @click="switchTheme('light')">
    浅色
  </n-button>
</template>
