<template>
    <div class="bg-gray-50 h-16 flex flex-row gap-3 relative items-start">
        <div v-for="item in (Object.keys(navBar))" :key="item" class="flex flex-col border gap-4 mt-2">
            <RouterLink  :to="{ name: navBar[item].routeName }">
                {{ item }}
            </RouterLink>
            <div 
            v-if="router.currentRoute.value.name === navBar[item].routeName"
            class="absolute bottom-0 border left-0">
                {{ navBar[item].title }}
            </div>
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

onMounted(() => {
    console.log(navBar.value);
});

</script>

<style lang="scss" scoped></style>