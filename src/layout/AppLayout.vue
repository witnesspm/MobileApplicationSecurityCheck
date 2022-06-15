<template>
    <div>

        <div class="top">

        </div>
        <div class="AppMenu">
            <AppMenu />
        </div>
    </div>

    <div class="shenti">
        <router-view></router-view>
    </div>
    <div class="box3">


        <div class="bottom">
            <div class="shuxian"></div>
            <p class="lx">联系我们</p>
            <p class="yx">邮箱:xxxxxxx</p>
            <p class="dz">地址:xxxxxxx</p>
            <p class="bq">版权所有 ©xxxxx</p>
            <p class="yd">移动应用安全检测</p>


        </div>
    </div>





</template>

<script lang="ts" setup>
import AppMenu from './components/AppMenu.vue'
</script>

<style lang="less" scoped>
@import './box3.less';

.top {

    height: 10px;
    background-color: #ffffff;
}

.AppMenu {}
</style>