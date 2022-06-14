<template>
    <div class="top">
        <Top />
        
        <div class="AppMenu">
            <AppMenu />
        </div>
    </div>
    
    <div class="shenti">
         <router-view></router-view>
    </div>
   




</template>

<script lang="ts" setup>
import AppMenu from './components/AppMenu.vue'
import Top from './components/Top.vue'
</script>

<style lang="less" scoped>
.top {

    background-color: #ffffff;
}

.AppMenu {}
</style>