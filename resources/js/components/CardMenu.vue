<template>
    <div
        class="absolute grid grid-cols-3 left-48 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 gap-2">
        <div class="border border-gray-200 rounded-lg p-2 hover:bg-gray-100 dark:border-gray-700 flex flex-col gap-1 text-center"
        v-for="item in items" :key="item">
            <i :class="`mdi ${item.icon}`" class="text-2xl text-gray-500"></i>
            {{ item.subTitle }}
        </div>
    </div>
</template>

<script setup>

const props = defineProps([
    'items'
])

</script>

<style lang="scss" scoped></style>