<template>
    <ul class="h-screen border-r border-gray-50  w-48 flex flex-col flex-start gap-3 px-6 pt-16">
        <li class="flex gap-1 cursor-pointer select-none" 
            v-for="(item, index) in sidebarData" :key="item.name"
            @click="openMenu(index)">
            <iconBase :name="item.icon"></iconBase>
            <span>{{ item.title }}</span>
            <CardMenu :items="item.subMenu" :class="{ 'hidden': !item.isOpen }"/>
        </li>
    </ul>



</template>

<script setup>
import { onMounted, reactive } from 'vue';
import { useStore } from 'vuex';
import iconBase from './IconBase.vue';
import CardMenu from './CardMenu.vue';

const Store = useStore();
const sidebarData = reactive([]);
onMounted(() => {
    sidebarData.push(...Store.getters.sidebarData.slice());
})

const openMenu = (index) => {
    sidebarData.forEach((item, i) => {
        item.isOpen = i === index ? !item.isOpen : false
    })
    // console.log(sidebarData);
}

const addTabData = (title) => {
    if (Store.state.data[title]) {
        return;
    } else {
        const componentId = `${title}-${Date.now()}`;
        const data = {
            title: title,
            routeName: title.toLowerCase(),
            icon: title,
            component: {
                [componentId]: {
                    tabName: 'index',
                    routeName: title,
                    isActive: true
                }

            }
        }
        Store.dispatch('addTabData', [data, title]);
        Store.dispatch('setActiveTab', title);
        Store.dispatch('setSecondTabActive', componentId);
        // console.log(Store.getters.componentTab);
    }
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