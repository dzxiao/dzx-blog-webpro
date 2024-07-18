<script setup lang="ts">
import { ref, defineComponent } from "vue";
import { useThemeStore } from "@/stores/pinia";
import { storeToRefs } from "pinia";
import XuSider from "@/layout/xu/XuSider.vue";
import markdownTxt from "@/assets/mds/渲染md文档之v-md-editor.md?raw";
const themeStore = useThemeStore();
const switchTheme = (type: string) => {
  themeStore.changeTheme(type);
};
defineComponent({
  components: {
    XuSider,
  },
});

const md = ref(markdownTxt);
</script>

<template>
  <n-layout class="xu" has-sider style="height: 100%">
    <XuSider />
    <n-layout class="content">
      <div id="content" style="height: 500px;">内容</div>
      <div id="API" style="height: 500px;">API</div>
    </n-layout>
    <n-anchor affix>
      <n-anchor-link title="内容" href="#content"></n-anchor-link>
      <n-anchor-link title="API" href="#API" />
    </n-anchor>
  </n-layout>
</template>

<style scoped lang="less">
.xu {
  ::v-deep(.content) {
    // padding: 30px 0;
  }
}
</style>
