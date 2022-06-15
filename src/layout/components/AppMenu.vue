<template>
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <div class="jiange"></div>
    <el-menu-item class="bannedclick" index="0">
      
        <img class="logo" src="../../assets/logo.png" alt="">
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">主页</el-menu-item>
    <el-menu-item index="2">博客</el-menu-item>
    <div class="flex-grow1" />
     <el-menu-item class="fanniu" index="3">
      联系
      </el-menu-item>
     <div class="jiange"></div>
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

.jiange{
  width: 3%;
}
.flex-grow {
  width: 20%;
  flex-grow: 0;
}
.flex-grow1 {
  
  flex-grow: 1;
}
.logo{
    width: 294px;
    height: 49px ;
   
}
 .fanniu{
  
}

</style>