<template>
    <div class="bg-gray-50 h-16 flex flex-col justify-end ">
        <div v-for="item in (Object.keys(navBar))" :key="item" class="flex flex-row gap-4">
            <RouterLink  :to="{ name: navBar[item].routeName }">
                {{ item }}
            </RouterLink>
        </div>
        <div 
            v-if="componentTab"
            class="flex gap-2">
            <a
            v-for="component in componentTab" :key="component"
            >
                {{ component }}
            </a>
        </div>
    </div>
    
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { useStore } from 'vuex';
import router from '../router';

const Store = useStore();

const navBar = computed(() => Store.getters.navbarData);
const componentTab = computed(() => Store.getters.componentTab);

onMounted(() => {
    console.log(navBar.value);
});

</script>

<style lang="scss" scoped></style>