<template>
    <div class="h-screen border-r border-gray-50  w-48 flex flex-col flex-start gap-2 px-3">
        <RouterLink @click="addTabData('dashboard')" :to="getActiveRoute('dashboard')">Home</RouterLink>
        <RouterLink @click="addTabData('users')" :to="getActiveRoute('users')">Users</RouterLink>
        <RouterLink @click="addTabData('permissions')" :to="getActiveRoute('permissions')">Permissions</RouterLink>
    </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';

const Store = useStore();

const addTabData = (title) => {
    if (Store.state.data[title]) {
        return;
    } else {
        const componentId = `${title}-${Date.now()}`;
        const data = {
            title: title,
            routeName: title.toLowerCase(),
            icon: title,
            component: {
                [componentId]: {
                    tabName: 'index',
                    routeName: title,
                    isActive: true
                }

            }
        }
        Store.dispatch('addTabData', [data, title]);
        Store.dispatch('setActiveTab', title);
        Store.dispatch('setSecondTabActive', componentId);
        // console.log(Store.getters.componentTab);
    }
}

const getActiveRoute = (item) => {
    if (Store.state.data[item] && Store.state.data[item].component) {
        const components = Store.state.data[item].component;
        const aciveComponent = Object.keys(components).find(key => components[key].isActive);
        if (aciveComponent) {
            return { name: components[aciveComponent].routeName };
        }
    }
    return { name: item.toLowerCase() };
}
</script>

<style lang="scss" scoped></style>