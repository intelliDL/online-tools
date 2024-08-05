<script setup lang="ts">
import { useStyleStore } from '@/stores/style.store';

const styleStore = useStyleStore();
const { isMenuCollapsed, isSmallScreen } = toRefs(styleStore);
const siderPosition = computed(() => (isSmallScreen.value ? 'absolute' : 'static'));
</script>

<template>
  <n-layout has-sider>
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="0"
      :width="240"
      :collapsed="isMenuCollapsed"
      :show-trigger="false"
      :native-scrollbar="false"
      :position="siderPosition"
    >
      <slot name="sider" />
    </n-layout-sider>
    <n-layout class="content">
      <slot name="content" />
      <a class="slide" href="https://beian.miit.gov.cn/" target="_blank">辽ICP备2024032834号-1</a>
      <div v-show="isSmallScreen && !isMenuCollapsed" class="overlay" @click="isMenuCollapsed = true" />
    </n-layout>
  </n-layout>
</template>

<style lang="less" scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000080;
  cursor: pointer;
}
.slide{
  display: inline-block;
    vertical-align: middle;
    margin-right: 15px;
    font-size: 12px;
    line-height: 26px;
    color: #ccc;
    white-space: nowrap;
}

.content {
  // background-color: #f1f5f9;
  ::v-deep(.n-layout-scroll-container) {
    padding: 26px;
  }
}

.n-layout {
  height: 100vh;
}
</style>
