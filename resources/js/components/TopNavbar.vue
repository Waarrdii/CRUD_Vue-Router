<template>
    <div class="overflow-x-scroll w-full">
        <div class="flex flex-nowrap gap-2 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <span v-for="(item,index) in tabData" :key="item.title" 
        :class="{'text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500':item.isOpen}"
        class="text-nowrap inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">
            {{ item.title }}
        </span>    
    </div>
    </div>
    
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const Store = useStore();

const tabData = computed(() => Store.getters.navbarData);


const setSecondActiveTab = (item) => {
    Store.dispatch('setSecondTabActive', item);
    // console.log(Store.getters.componentTab);
}


const setActiveTab = (item) => {
    Store.dispatch('setActiveTab', item);
    // console.log(Store.getters.activeTab);
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