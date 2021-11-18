import {createRouter, createWebHistory} from 'vue-router'

// createRouter 创建路由实例
const router = createRouter({
    //hash模式#（默认）：createWebHashHistory(),
    history: createWebHistory(),
    // 路由配置
    routes:[
        {
            path: '/',
            component: () => import('@/App.vue') //路由懒加载
        },
        {
            path: '/vue2',
            component: () => import('@/components/Vue2Look.vue')
        },
        {
            path: '/vue3',
            component: () => import('@/components/Vue3Look.vue')
        }
    ]
})

export default router