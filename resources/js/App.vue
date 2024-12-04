<template>
    <div class="flex items-center gap-3">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/users">Users</RouterLink>
        <RouterLink to="/permissions">Permissions</RouterLink>
    </div>

    <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';


</script>

<style lang="scss" scoped>

</style>