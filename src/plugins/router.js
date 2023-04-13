import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/pages/HomePage.vue";


const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/job-info',
        component: () => import('@/pages/JobInfoPage.vue')
    },
    {
        path: '/login',
        component: () => import('@/pages/LoginPage.vue')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})