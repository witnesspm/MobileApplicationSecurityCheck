import {createRouter, createWebHashHistory} from 'vue-router'

const routes =[
    {
        path:'/',
        name:'home',
        component:()=>import('../views/home/index.vue')
    },
    {
        path:'/show',
        name:'show',
        component:()=>import('../views/show/index.vue')
    },
]

const router = createRouter({
    history:createWebHashHistory(),//路由模式
    routes//路由规则
})

export default router