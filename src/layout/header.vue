<script setup lang="ts">
import { defineComponent, h, ref } from 'vue';
import { useRouter } from 'vue-router';
// @ts-ignore
import { GameController } from '@vicons/ionicons5';
import type { MenuOption } from 'naive-ui';
const router = useRouter();
defineComponent({
  components: {
    GameController
  },
});
const menuOptions: MenuOption[] = [
  {
    label: '第一站',
    key: '/xiao',
  },
  {
    label: '关于我的故事',
    key: '/about',
  }
];

const activeKey = ref('');
activeKey.value = location.pathname;
const isChangeMenu = (key: string, item: MenuOption) => {
  activeKey.value = key;
  router.push({ path: key });
}
</script>

<template>
  <n-layout-header>
    <div> <n-icon size="30" :component="GameController" />logo</div>
    <div>
      异世界
    </div>
    <div class="right-menu">
      <n-menu v-model:value="activeKey" mode="horizontal" :on-update:value="isChangeMenu" :options="menuOptions" />
    </div>
  </n-layout-header>
</template>

<style lang="less">
.n-layout-header {
  // border: 1px solid red;
  height: 60px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9;
  box-shadow: 0 10px 40px -10px rgba(0,64,128,.2);
  >div {
    height: 60px;
  }

  .right-menu {
    .n-menu-item {
      height: 60px;
    }
  }
}
</style>