
<template>
  <div></div>
</template>

<script lang="ts">
import { createDiscreteApi } from 'naive-ui'
import { defineComponent } from "vue";

const { message, notification, dialog, loadingBar } = createDiscreteApi(
  ['message', 'dialog', 'notification', 'loadingBar']
)

window.$message = message;
window.$notification = notification;
window.$dialog = dialog;
window.$loadingBar = loadingBar;

export default defineComponent({});
</script>