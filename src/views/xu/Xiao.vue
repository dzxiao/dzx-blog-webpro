<script setup lang="ts">
import { ref } from 'vue';
import { useThemeStore } from '@/stores/pinia';
import { storeToRefs } from 'pinia';
import markdownTxt from '@/assets/mds/渲染md文档之v-md-editor.md?raw';
const themeStore = useThemeStore();
const switchTheme = (type: string) => {
  themeStore.changeTheme(type);
}
const md = ref(markdownTxt);
</script>

<template>
</template>
