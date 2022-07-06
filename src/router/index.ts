import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '../layout/AppLayout.vue'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: AppLayout,
        children: [
            {
                path: '',//默认子路由，首页
                name: 'Home',
                component: () => import('../views/Home/index.vue')
            },
            {
                path: '/apphome',//APP检测主页
                name: 'AppHome',
                component: () => import('../views/App/AppHome/index.vue')
            },
            {
                path: '/appshow',//APP详情页页面
                name: 'AppShow',
                component: () => import('../views/App/AppShow/index.vue')
            },
            {
                path: '/bloghome',//博客主页
                name: 'BlogHome',
                component: () => import('../views/Blog/BlogHome/index.vue')
            },
            {
                path: '/blogsubmit',//博客发布页
                name: 'BlogSubmit',
                component: () => import('../views/Blog/BlogSubmit/index.vue')
            },
            {
                path: '/blogarticle',//博客详情页
                name: 'BlogArticle',
                component: () => import('../views/Blog/BlogArticle/index.vue')
            },
            {
                path: '/404',//错误页面
                name: 'c404',
                component: () => import('../views/c404/index.vue')
            },
        ]
    },
    {//图表修改页面
        path: '/appupdata',//错误页面
        name: 'AppUpdata',
        component: () => import('../views/App/AppUpdata/index.vue')
    },

    {//重定向
        path: '/:patMatch(.*)',
        redirect: '/404'
    }

]

const router = createRouter({
    history: createWebHashHistory(),//路由模式
    routes//路由规则
})

router.beforeEach(() => {
    nprogress.start()//开始加载进度条
})

router.afterEach(() => {
    nprogress.done()//结束进度条
})

export default router