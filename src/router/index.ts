import {createRouter,createWebHistory} from 'vue-router';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            name: 'home',
            component: () => import('@/pages/home/index.vue')
        },
        {
            path: '/hospital',
            name: 'hospital',
            component: () => import('@/pages/hospital/index.vue'),
            children:[
                {
                    path: ':/register',
                    name: 'register',
                    component: () => import('@/pages/hospital/components/register/index.vue')
                },
                {
                    path: ':/detail',
                    name: 'detail',
                    component: () => import('@/pages/hospital/components/detail/index.vue')
                },
                {
                    path: ':/notice',
                    name: 'notice',
                    component: () => import('@/pages/hospital/components/notice/index.vue')
                },
                {
                    path: ':/searchAndCancel',
                    name: 'searchAndCancel',
                    component: () => import('@/pages/hospital/components/searchAndCancel/index.vue')
                },
                {
                    path: ':/stopDiagnosis',
                    name: 'stopDiagnosis',
                    component: () => import('@/pages/hospital/components/stopDiagnosis/index.vue')
                },
            ]
        },
        {
            path: '/',
            redirect: '/home'
        }
    ],
    // 路由滚动行为
    scrollBehavior() {
        return {left: 0, top: 0}
    }
})
