<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <Top/>
                <AppMenu/>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>

<script lang="ts" setup>
import AppMenu from './components/AppMenu.vue'
import Top from './components/Top.vue'
</script>

<style lang="less" scoped>
.el-header {

}
</style>