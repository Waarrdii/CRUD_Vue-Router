<template>
    <div class="bg-gray-50 h-16 flex flex-col justify-end ">
        <div class="flex flex-row gap-4 capitalize h-3/5 items-end border">
            <RouterLink 
            @click ="setActiveTab(item)"
            v-for="item in (Object.keys(navBar))" :key="item"  :to="{ name: navBar[item].routeName }">
                {{ item }}
            </RouterLink>
        </div>
        <div 
            
            class="flex gap-2 capitalize flex-1 items-end border">
            <RouterLink
            :to="{name: componentTab[component].routeName}"
            v-for="component in (Object.keys(componentTab))" :key="component"
            >
                {{ componentTab[component].tabName }}
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
    console.log(Store.getters.activeTab);
}

onMounted(() => {
    console.log(navBar.value);
});

</script>

<style lang="scss" scoped></style>