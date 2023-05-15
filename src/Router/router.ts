import { createRouter, createWebHistory } from 'vue-router'
import About from '@/components/About.vue'
import Home from "../components/Home.vue"
import Gifs from "../components/Gifs.vue"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/gifs',
        name: 'Gifs',
        component: Gifs
    },
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
