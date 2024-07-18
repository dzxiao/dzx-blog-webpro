<template>
  <n-layout-sider
    bordered
    collapse-mode="width"
    :collapsed-width="64"
    :width="240"
    :collapsed="collapsed"
    show-trigger
    @collapse="collapsed = true"
    @expand="collapsed = false"
    style="height: 100%"
  >
    <n-menu
      v-model:value="activeKey"
      :collapsed="collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
      class="n-menu-xiao"
    />
  </n-layout-sider>
</template>
<script lang="ts" setup>
import type { Component } from "vue";
import { h, ref } from "vue";
import { NIcon } from "naive-ui";
import type { MenuOption } from "naive-ui";
import {
  BookOutline as BookIcon,
  HeartCircleOutline as HeartIcon,
} from "@vicons/ionicons5";
function renderIcon(icon: Component, asyncIcon = false) {
  if (asyncIcon) {
    return () => {
      if (collapsed.value) {
        return h(NIcon, null, { default: () => h(icon) });
      }
    };
  } else {
    return () => h(NIcon, null, { default: () => h(icon) });
  }
}

const collapsed = ref(false);
const activeKey = ref<string | null>("welcome");

const menuOptions: MenuOption[] = [
  {
    label: "您好 Hi Hallo Bonjour",
    key: "welcome",
    icon: renderIcon(HeartIcon, true),
  },
  {
    key: "divider-1",
    type: "divider",
    props: {
      style: {
        // marginLeft: '32px'
      },
    },
  },
  {
    label: "1973年的弹珠玩具",
    key: "pinball-1973",
    icon: renderIcon(BookIcon),
    children: [
      {
        label: "鼠",
        key: "rat",
      },
    ],
  },
];
</script>
<style lang="less" scoped>
.n-menu-xiao {
  padding: 8px 0;
  font-size: 13px !important;
  ::v-deep(.n-menu-divider) {
    background-color: #e2e2e3;
    margin-top: 15px;
  }
}
</style>
