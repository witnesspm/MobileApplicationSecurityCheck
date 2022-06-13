<template>
  <!-- 路由的渲染出口 -->
    <el-config-provider :locale="locale">
     <router-view></router-view>
  </el-config-provider>
 
</template>

<script setup lang="ts">
import locale from 'element-plus/lib/locale/lang/zh-cn'//设置elmui全局国际化

</script>

<style lang="less">
#app {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
.bannedclick{
   pointer-events:none;
}
</style>
