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
   




</template>

<script lang="ts" setup>
import AppMenu from './components/AppMenu.vue'
</script>

<style lang="less" scoped>
.top {
    
    height: 10px;
    background-color: #ffffff;
}

.AppMenu {
    
}
</style>