import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/main'
    },
    {
        path: '/main',
        name: 'Main',
        component: () => import('@/views/main.vue'),
        children: [
            {
                // 默认子路由
                path: '',
                redirect: '/main/home'
            },
            {
                path: 'home',
                name: 'Home',
                component: () => import('@/views/home.vue')
            }
            // 其他子路由可以继续在这里添加
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
