import { createRouter, createWebHistory } from 'vue-router';
import Dasboard from '../components/Dasboard.vue';


const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Dasboard,
        meta: {
            title: 'Dashboard'
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => { 
    document.title = to.meta.title || 'Default Title'; next(); 
    });
export default router;
