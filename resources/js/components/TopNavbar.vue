<template>
    <div class="bg-gray-50 h-16 flex flex-col justify-end ">
        <div class="flex flex-row gap-4 capitalize h-3/5 items-end border">
            <RouterLink 
            @click ="setActiveTab(item)"
            v-for="item in (Object.keys(navBar))" 
            :key="item"  
            :to="getActiveRoute(item)">
                {{ item }}
            </RouterLink>
        </div>
        <div 
            
            class="flex gap-2 capitalize flex-1 items-end border">
            <RouterLink
            :to="{name: componentTab[component].routeName}"
            v-for="component in (Object.keys(componentTab))" :key="component"
            @click="setSecondActiveTab(component)"
            :class="{ 'text-blue-500': componentTab[component].isActive }"
            >
                {{ component  }}
            </RouterLink>
        </div>
    </div>
    
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { useStore } from 'vuex';

const Store = useStore();

const navBar = computed(() => Store.getters.navbarData);
const componentTab = computed(() => Store.getters.componentTab);

const setActiveTab = (item)=>{
    Store.dispatch('setActiveTab', item);
    // console.log(Store.getters.activeTab);
}

const setSecondActiveTab = (item)=>{
    Store.dispatch('setSecondTabActive', item);
    // console.log(Store.getters.componentTab);
}

const getActiveRoute = (item) => {
    if(Store.state.data[item] && Store.state.data[item].component) {
    const components = Store.state.data[item].component;
    const aciveComponent = Object.keys(components).find(key => components[key].isActive);
        if(aciveComponent) {
            return {name : components[aciveComponent].routeName};
        }
    }
    return { name: item.toLowerCase() };
}

</script>

<style lang="scss" scoped></style>