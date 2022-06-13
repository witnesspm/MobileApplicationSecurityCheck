import {createRouter, createWebHashHistory,RouteRecordRaw} from 'vue-router'
import AppLayout from '../layout/AppLayout.vue'

const routes :RouteRecordRaw[] =[
    {
        path:'/',
        component:AppLayout,
        children:[
            {
                path:'',//默认子路由
                name:'home',
                component:()=>import('../views/home/index.vue')
            }
        ]
    },
    {
        path:'/show',
        name:'show',
        component:()=>import('../views/show/index.vue')
    }
]

const router = createRouter({
    history:createWebHashHistory(),//路由模式
    routes//路由规则
})

export default router