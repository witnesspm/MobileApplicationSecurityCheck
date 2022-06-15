import {createRouter, createWebHashHistory,RouteRecordRaw} from 'vue-router'
import AppLayout from '../layout/AppLayout.vue'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const routes :RouteRecordRaw[] =[
    {
        path:'/',
        component:AppLayout,
        children:[
            {
                path:'',//默认子路由
                name:'home',
                component:()=>import('../views/home/index.vue')
            },
            {
                path:'/show',//详情页页面
                name:'show',
                component:()=>import('../views/show/index.vue')
            }
        ]
    },
   
]

const router = createRouter({
    history:createWebHashHistory(),//路由模式
    routes//路由规则
})

router.beforeEach(()=>{
    nprogress.start()//开始加载进度条
})

router.afterEach(()=>{
    nprogress.done()//结束进度条
})

export default router