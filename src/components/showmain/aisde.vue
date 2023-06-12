<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      router
      :ellipsis="false"
      @select="handleSelect"
  >
    <el-menu-item index="/showindex">LOGO</el-menu-item>
    <div class="flex-grow" />
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="/showindex/page1">闪购管理</el-menu-item>
      <el-menu-item index="/showindex/page2">闪购日志</el-menu-item>
      <el-menu-item index="/showindex/page3">闪购商品</el-menu-item>
      <el-menu-item index="/showindex/page4">闪购周期</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
