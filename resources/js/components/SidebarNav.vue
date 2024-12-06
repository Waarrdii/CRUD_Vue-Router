<template>
    <div class="h-screen border-r border-gray-50  w-48 flex flex-col flex-start gap-2 px-3">
        <RouterLink @click="addTabData('dashboard')" to="/">Home</RouterLink>
        <RouterLink @click="addTabData('users')" to="/users">Users</RouterLink>
        <RouterLink @click="addTabData('permissions')" to="/permissions">Permissions</RouterLink>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import store from '../store';

const Store = useStore();

const addTabData = (title) => {
    const componentId = `${Date.now()}`;
    const data = {
        title: title,
        routeName: title.toLowerCase(),
        icon: title,
        component : {
            [componentId] :{
                tabName: 'index',
                routeName: title
            }
            
        }
    }
    Store.dispatch('addTabData', [data, title]);
    Store.dispatch('setActiveTab', title);
    console.log(store.getters.navbarData);
}

</script>

<style lang="scss" scoped>

</style>