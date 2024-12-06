<template>
    user index

    <RouterLink 
    @click="addComponent('create')"
    :to="{name: 'users.create'}">Create User</RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { computed } from 'vue';
import { useStore } from 'vuex';

const Store = useStore();
const componentTab = computed(() => Store.getters.componentTab);



const addComponent = (title) => {
    const activeTab = Store.getters.activeTab;
    const componentId = `${activeTab}-${Date.now()}`;
    const data = {
        tabName: title,
        routeName: `${activeTab}.${title}`,
    }
    
    Store.dispatch('addComponent', [componentId, data]);
    Store.dispatch('setSecondTabActive', componentId);
    console.log(Store.getters.secondTabActive);
}

</script>

<style lang="scss" scoped>

</style>