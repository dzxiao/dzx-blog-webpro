<script setup lang="ts">
import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import Header from './header.vue';
defineComponent({
  components: {
    Header
  },
});
</script>

<template>
  <n-layout style="height: 100vh">
    <Header />
    <n-layout position="absolute" style="top: 60px;" >
      <n-layout-content content-style="padding: 0 24px 0 0;" style="height: 100%;">
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style lang="less"></style>