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
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})