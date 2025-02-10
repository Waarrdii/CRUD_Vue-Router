<template>
    <aside id="sidebar-menu"
        class=" top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-blue-900  dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
                <li>
                    <a href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 22 21">
                            <path
                                d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                            <path
                                d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                        </svg>
                        <span class="ms-3">Dashboard</span>
                    </a>
                </li>
                <li v-for="(item, index) in sidebarData" :key="item.name">
                    <button @click="openMenu(index)" type="button"
                        :class="{ 'bg-rose-500 bg-opacity-500': item.isOpen }"
                        class="flex items-center w-full p-2 text-base text-gray-100 transition duration-75 rounded-lg group hover:bg-rose-500 dark:text-white dark:hover:bg-gray-700"
                        aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                        <i :class="`mdi ${item.icon}`" class="text-3xl "></i>
                        <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">{{ item.title }}</span>
                    </button>
                    <ul id="subMenu" class=" bg-rose-50 text-gray-800 rounded-lg" v-if="item.isOpen">
                        <li v-for="(item, subItemIndex) in item.subMenu" :key="item.subTitle">
                            <button type="button"
                                @click="activeMenu(index, subItemIndex)"
                                class="flex items-center w-full py-1 text-gray-900 transition duration-75 rounded-lg px-4 group cursor-pointer space-x-2 hover:bg-rose-100 dark:text-white dark:hover:bg-gray-700">
                                <i :class="`mdi ${item.icon}`" class="text-xl "></i>
                                <span class="text-sm capitalize">{{ item.subTitle }}</span>
                            </button>
                        </li>
                    </ul>
                </li>

            </ul>
        </div>
    </aside>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import { useStore } from 'vuex';



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

const activeMenu = (parentIndex, subItemIndex) => {
    // Pertama, iterasi seluruh sidebarData untuk menutup semua subMenu
    sidebarData.forEach((item) => {
        item.subMenu.forEach((subItem) => {
            subItem.isOpen = false;
        })
    })
    // Kemudian, aktifkan subMenu yang dipilih
    sidebarData[parentIndex].subMenu[subItemIndex].isOpen = true;
    //mengaktifkan subMenu yang dipilih
    sidebarData[parentIndex].subMenu[subItemIndex].isActive = true;

    // Menyimpan perubahan ke Vuex
    const title = sidebarData[parentIndex].subMenu[subItemIndex].subTitle;
    const routeName = sidebarData[parentIndex].subMenu[subItemIndex].routeName;
    const isActive = true;
   
    const subTab = [
        {
            subTabTitle: 'Index',
            isActive: true
        }
    ]

    Store.dispatch('addData', { title, routeName, isActive, subTab });
    console.log(Store.getters.navbarData);
}

</script>

<style lang="scss" scoped></style>