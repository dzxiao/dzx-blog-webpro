<script setup lang="ts">
import { ref } from 'vue';
import { useThemeStore } from '@/stores/pinia';
import { storeToRefs } from 'pinia';
import markdownTxt from '@/assets/mds/buildwebsite.md?raw';
const themeStore = useThemeStore();
const switchTheme = (type: string) => {
  themeStore.changeTheme(type);
}
const text = ref(markdownTxt);
</script>

<template>
  <div>首页</div>
  <n-button @click="switchTheme('dark')">深色</n-button>
  <n-button type="primary" @click="switchTheme('light')">
    浅色
  </n-button>
  <v-md-preview :text="text" mode="preview"></v-md-preview>
</template>
