<script setup lang="ts">
import { defineComponent, h, ref } from 'vue';
import type { CSSProperties } from 'vue';
import { useThemeStore } from '@/stores/pinia';
import { useRouter } from 'vue-router';
// @ts-ignore
import { GameController, Sunny, MoonOutline } from '@vicons/ionicons5';
import type { MenuOption } from 'naive-ui';
const router = useRouter();
const themeStore = useThemeStore();
defineComponent({
  components: {
    GameController
  },
});
const menuOptions: MenuOption[] = [
  {
    label: '序',
    key: '/xiao',
  },
  {
    label: '续',
    key: '/about',
  }
];
// 路由handles
const activeKey = ref('/xiao');
activeKey.value = location.pathname;
if (activeKey.value === "/") {
  activeKey.value = '/xiao';
}
const isChangeMenu = (key: string, item: MenuOption) => {
  activeKey.value = key;
  router.push({ path: key });
}

// 主题切换switch样式
const railStyle = ({ focused, checked }: { focused: boolean, checked: boolean }) => {
  const style: CSSProperties = {}
  if (checked) {
    style.background = '#63e2b7'
    if (focused) {
      // style.boxShadow = '0 0 0 2px #63e2b7'
    }
  } else {
    style.background = '#e2e1e4'
    if (focused) {
      style.boxShadow = '0 0 0 2px #ccccd6'
    }
  }
  return style
}
// 切换主题时
const switchTheme = (type: string) => {
  let theme = '';
  if (type) {
    theme = 'dark';
  } else {
    theme = 'light'
  }
  themeStore.changeTheme(theme);
}
</script>

<template>
  <n-layout-header>
    <div class="left-logo"> <n-icon size="30" :component="GameController" /><span>logo</span></div>
    <div class="center-title">
      <n-spin size="small" />
      打怪获取标题中·····
    </div>
    <div class="right-menu">
      <n-menu v-model:value="activeKey" mode="horizontal" :on-update:value="isChangeMenu" :options="menuOptions" />
      <n-switch :round="false" :rail-style="railStyle" :on-update:value="switchTheme">
        <template #checked-icon>
          <n-icon :component="MoonOutline" />
        </template>
        <template #unchecked-icon>
          <n-icon :component="Sunny" />
        </template>
      </n-switch>

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
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);

  >div {
    height: 60px;
  }

  .left-logo {
    .n-icon {
      vertical-align: middle;
    }
  }

  .center-title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .n-spin {
      margin-right: 8px;
    }
  }

  .right-menu {
    display: flex;
    align-items: center;

    .n-menu-item {
      height: 60px;
    }
    .n-switch {
      margin-left: 10px;
    }
  }
}
</style>