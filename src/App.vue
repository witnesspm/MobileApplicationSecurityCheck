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

.bannedclick {
  pointer-events: none;
}

.juzhong {
  display: flex;
  align-items: center;
  justify-content: center;
}

/*全局滚动条样式*/
&::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

&::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgb(167, 132, 88);
  background: rgb(167, 132, 88);
}

&::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);

}

#nprogress .bar{//进度条样式
    background: rgb(167, 132, 88) !important;
}

.m-top160 {
    margin-top: 160px;
}

.m-top120 {

    margin-top: 120px;
}

.w10 {
    width: 10px;
}

</style>
