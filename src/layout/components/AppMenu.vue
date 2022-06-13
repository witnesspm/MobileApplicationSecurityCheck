<template>
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item class="bannedclick" index="0">
        <img class="logo" src="../../assets/logo.png" alt="">
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">主页</el-menu-item>
    <el-menu-item index="2">主页</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style lang="less" scoped>
.flex-grow {
  flex-grow: 1;
}
.logo{
    width: 294px;
    height: 49px ;
   
}
</style>