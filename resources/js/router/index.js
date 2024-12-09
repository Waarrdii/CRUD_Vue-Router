import { createRouter, createWebHistory } from 'vue-router';
import example from '../components/example.vue';
import usersIndex from '../pages/users/usersIndex.vue';
import permissionList from '../pages/users/permissionList.vue';
import UserForm from '../pages/users/UserForm.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: example,
        meta: { title: 'Home Page'}
    },
    {
        path: '/',
        name: 'dashboard',
        component: example,
        meta: { title: 'Home Page'}
    },
    {
        path: '/users',
        name: 'users',
        component: usersIndex,
        meta: { title: 'Users Page'}
    },
    {
        path: '/users/create',
        name: 'users.create',
        component: UserForm,
        meta: { title: 'Create User Page'}
    },
    {
        path: '/permissions',
        name: 'permissions',
        component: permissionList,
        meta: { title: 'Permissions Page'}
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
