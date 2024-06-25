<script setup lang="ts">
import { CashOutline as CashIcon } from "@vicons/ionicons5";
import { defineComponent } from "vue";
defineComponent({
  components: {
    CashIcon,
  },
});
</script>
<template>
  <div class="home-layout">
    <div class="ripple box">
      <div class="avatar-img">
        <img width="110" src="@/assets/image/avatar.png" />
      </div>
    </div>
    <div class="btns">
      <n-button type="primary" round> 从这里起始 </n-button>
      <n-button round secondary>GITHUB</n-button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.home-layout {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px 0;
  .avatar-img {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }
  .btns {
    display: flex;
    gap: 0 40px;
    button:first-child {
      padding: 14px 28px !important;
      font-size: 15px;
    }
  }
}
// 头像波纹
.box {
  width: 110px;
  height: 110px;
  margin: 90px auto;
  transition: all 0.9s ease;
  z-index: 1;
  box-sizing: border-box;
  position: relative;
}
.ripple:before {
  content: "";
  animation: ripple 2s ease-out infinite;
  border: 1px solid #d8b3b3;
  border-radius: 50%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  position: absolute;
  opacity: 0;
}
.ripple:after {
  content: "";
  animation: ripple 2s 1s ease-out infinite;
  border: 1px solid #d8b3b3;
  border-radius: 50%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  position: absolute;
  opacity: 0;
}
@keyframes ripple {
  0% {
    transform: scale(1.3);
    opacity: 0.4;
  }
  25% {
    transform: scale(1.8);
    opacity: 0.3;
  }
  50% {
    transform: scale(2.3);
    opacity: 0.2;
  }
  75% {
    transform: scale(2.8);
    opacity: 0.1;
  }
  100% {
    transform: scale(3.3);
    opacity: 0;
  }
}

// 按钮光闪
.n-button--primary-type {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  // padding: 0.5em 1em;
  outline: none;
  border: none;
  overflow: hidden;
  cursor: pointer;
}

.n-button--primary-type::after {
  content: "";
  z-index: -1;
  background-color: hsla(0, 0%, 100%, 0.2);
  position: absolute;
  top: -50%;
  bottom: -50%;
  width: 1.25em;
  transform: translate3d(-525%, 0, 0) rotate(35deg);
}

.n-button--primary-type:hover::after {
  transition: transform 0.4s ease-in-out;
  transform: translate3d(500%, 0, 0) rotate(35deg);
}
</style>
