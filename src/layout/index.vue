<script setup lang="ts">
import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { useLoadingBar } from 'naive-ui';
import Header from './header.vue';
const loadingBar = useLoadingBar();
defineComponent({
  components: {
    Header
  },
});
</script>

<template>
  <n-layout>
    <Header />
    <n-layout-content content-style="padding: 24px;height:92vh">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </n-layout-content>
  </n-layout>
</template>

<style lang="less"></style>