<template>
    <div class="flex flex-row">
        <SidebarNav />
        <div class="flex-1 flex flex-col">
            <TopNavbar />
            <RouterView />
            
        </div>
    </div>

    
</template>

<script setup>
import TopNavbar from './components/TopNavbar.vue';
import SidebarNav from './components/SidebarNav.vue';


</script>

<style lang="scss" scoped>

</style>