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

const activeKey = ref('/xiao');
activeKey.value = location.pathname;
if(activeKey.value==="/"){
  activeKey.value = '/xiao';
}
console.log(activeKey.value);
const isChangeMenu = (key: string, item: MenuOption) => {
  activeKey.value = key;
  router.push({ path: key });
}
</script>

<template>
  <n-layout-header>
    <div class="left-logo"> <n-icon size="30" :component="GameController" /><span>logo</span></div>
    <div>
      打怪获取标题中·····
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
  line-height: 60px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9;
  // box-shadow: 0 10px 40px -10px rgba(0, 64, 128, .2);
  // box-shadow: 2px 2px 4px rgba(0,0,0,.6);
  box-shadow: 0 0 8px 0 rgba(232,237,250,.6),0 2px 4px 0 rgba(232,237,250,.5);
  // box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
  // box-shadow: 0 3px 8px 0 rgba(0,0,0,.03);
  // box-shadow: 1px 1px 2px 0 rgba(0,0,0,.15), inset 1px 2px 0 0 #fff;
  // box-shadow: 0 0 28px rgba(0,0,0,.07);
  // box-shadow: 0 3px 8px 0 rgba(0,0,0,.03);
  >div {
    height: 60px;
  }

  .left-logo {
    .n-icon {
      vertical-align: middle;
    }
  }

  .right-menu {
    .n-menu-item {
      height: 60px;
    }
  }
}</style>