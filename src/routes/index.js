import {createRouter, createWebHistory} from 'vue-router'

import Home from '@/components/templates/Home.vue'

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes:[
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/curtidos',
            name: 'curtidos',
            component: () => import('../components/templates/Curtidos.vue')
        }
    ]
})

export default router