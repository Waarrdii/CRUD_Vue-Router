<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const secondData = computed(() => store.getters.secondaryTab);

</script>

<template>
    <div class="overflow-x-scroll w-full">
        <div class="flex flex-nowrap gap-2 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <span v-for="(item,index) in secondData" :key="index" 
        @click="setActiveTab(index)"
        :class="{'text-blue-600 hover:text-blue-600 hover:font-semibold bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500':item.isActive}"
        class="cursor-pointer text-nowrap inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">
            {{ item.subTabTitle }}
        </span>    
    </div>
    </div>
</template>