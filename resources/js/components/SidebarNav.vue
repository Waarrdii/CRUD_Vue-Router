<template>
    <div class="h-screen border-r border-gray-50  w-48 flex flex-col flex-start gap-2 px-3">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink @click="addTabData('Users')" to="/users">Users</RouterLink>
        <RouterLink @click="addTabData('Permissions')" to="/permissions">Permissions</RouterLink>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';

const Store = useStore();

const addTabData = (title) => {
    const data = {
        title: title,
        routeName: title.toLowerCase(),
        icon: title
    }

    Store.dispatch('addTabData', [data, title]);
}

</script>

<style lang="scss" scoped>

</style>