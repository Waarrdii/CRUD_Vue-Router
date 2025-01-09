import { createStore } from 'vuex';

const store = createStore({
    state: {
        data : [
            {
                title: 'dashboard',
                icon: 'dashboard',
                routeName: 'home',
                component: {
                    '': {
                        tabName: 'index',
                        routeName: 'home',
                        isActive : true
                    }
                }
            },
        ],
        activeTab: 'dashboard',
        sidebarData : [
            {
                title: 'Perusahaan',
                icon :'mdi-city',
                isOpen:false,
                subMenu:[
                    {
                        subTitle:'Profil Perusahaan',
                        icon:'mdi-office-building-cog-outline',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                    {
                        subTitle:'Mata Uang',
                        icon:'mdi-cash',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                    {
                        subTitle:'Cabang',
                        icon:'mdi-source-branch',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                    {
                        subTitle:'Departemen',
                        icon:'mdi-hub-outline',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                    {
                        subTitle:'Karyawan',
                        icon:'mdi-account-tie',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    }
                ]
            },
            {
                title: 'Buku Besar',
                icon :'mdi-book-open-outline',
                isOpen:false,
                subMenu:[
                    {
                        subTitle:'Akun Perkiraan',
                        icon:'mdi-invoice-list-outline',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                    {
                        subTitle:'Jurnal Umum',
                        icon:'mdi-invoice-text-multiple-outline',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                    {
                        subTitle:'Anggaran',
                        icon:'mdi-contrast-box',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                    {
                        subTitle:'Monitoring Anggaran',
                        icon:'mdi-clipboard-text-search',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                    {
                        subTitle:'Transfer Anggaran',
                        icon:'mdi-format-rotate-90',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                ]
            },
            {
                title: 'Kas & Bank',
                icon :'mdi-bank',
                isOpen:false,
                subMenu:[
                    {
                        subTitle:'Penerimaan Lainnya',
                        icon:'mdi-cash-check',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                    {
                        subTitle:'Pembayaran Lainnya',
                        icon:'mdi-cash-multiple',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                    {
                        subTitle:'Transfer Bank',
                        icon:'mdi-bank-transfer',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                    {
                        subTitle:'Rekening Koran',
                        icon:'mdi-book-open-variant-outline',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                    {
                        subTitle:'History Bank',
                        icon:'mdi-history',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                    {
                        subTitle:'Rekonsiliasi Bank',
                        icon:'mdi-bank-plus',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                ]
            },
            {
                title: 'Penjualan',
                icon :'mdi-cart-arrow-right',
                isOpen:false,
                subMenu:[
                    {
                        subTitle:'Penawaran Penjualan',
                        icon:'mdi-hand-coin-outline',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                    {
                        subTitle:'Pesanan Penjualan',
                        icon:'mdi-cart-arrow-down',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                    {
                        subTitle:'Pengiriman Pesanan',
                        icon:'mdi-truck-fast-outline',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                    {
                        subTitle:'Uang Muka Penjualan',
                        icon:'mdi-cash-fast',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                    {
                        subTitle:'Faktur Penjualan',
                        icon:'mdi-clipboard-edit-outline',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                    {
                        subTitle:'penerimaan Penjualan',
                        icon:'mdi-cart-check',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                    {
                        subTitle:'Retur Penjualan',
                        icon:'mdi-archive-arrow-down-outline',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                    {
                        subTitle:'Kategori Pelanggan',
                        icon:'mdi-account-tag',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                    {
                        subTitle:'Pelanggan',
                        icon:'mdi-account-group',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                ]
            },
            {
                title: 'Pembelian',
                icon :'mdi-basket',
                isOpen:false,
                subMenu:[
                    {
                        subTitle:'Pesanan Pembelian',
                        icon:'mdi-basket-plus-outline',
                        routeName:''
                    },
                    {
                        subTitle:'Penerimaan Barang',
                        icon:'mdi-truck-check-outline',
                        routeName:''
                    },
                    {
                        subTitle:'Uang Muka Pembelian',
                        icon:'mdi-cash-fast',
                        routeName:''
                    },
                    {
                        subTitle:'Faktur Pembelian',
                        icon:'mdi-clipboard-edit-outline',
                        routeName:''
                    },
                    {
                        subTitle:'Pembayaran Pembelian',
                        icon:'mdi-basket-check',
                        routeName:''
                    },
                    {
                        subTitle:'Retur Pembelian',
                        icon:'mdi-archive-arrow-up-outline',
                        routeName:''
                    },
                    {
                        subTitle:'Kategori Pemasok',
                        icon:'mdi-account-tag-outline',
                        routeName:''
                    },
                    {
                        subTitle:'Pemasok',
                        icon:'mdi-account-group-outline',
                        routeName:''
                    },
                ]
            },
            {
                title: 'Persediaan',
                icon :'mdi-package-variant',
                isOpen:false,
                subMenu:[
                    {
                        subTitle:'Permintaan Barang',
                        icon:'mdi-package-variant-closed-plus',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                    {
                        subTitle:'Pemindahan Barang',
                        icon:'mdi-bag-carry-on',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                    {
                        subTitle:'Penyesuaian Barang',
                        icon:'mdi-clipboard-check-outline',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                    {
                        subTitle:'Gudang',
                        icon:'mdi-warehouse',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                    {
                        subTitle:'Kategori Barang',
                        icon:'mdi-table-edit',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                ]
            },
            {
                title: 'Aset Tetap',
                icon :'mdi-truck',
                isOpen:false,
                subMenu:[
                    {
                        subTitle:'Aset Tetap',
                        icon:'mdi-truck-cargo-container',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                    {
                        subTitle:'Kategori Aset Tetap',
                        icon:'mdi-inbox-multiple-outline',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                    {
                        subTitle:'Perubahan Aset Tetap',
                        icon:'mdi-truck-plus-outline',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                    {
                        subTitle:'Disposisi Aset Tetap',
                        icon:'mdi-printer-pos-refresh-outline',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                    {
                        subTitle:'Pemindahan Aset',
                        icon:'mdi-truck-delivery-outline',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                ]
            },
            {
                title: 'Daftar Laporan',
                icon :'mdi-chart-tree',
                isOpen:false,
                subMenu:[
                    {
                        subTitle:'Laporan Keuangan',
                        icon:'mdi-clipboard-text-multiple-outline',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                    {
                        subTitle:'SPT PPN/PPNBM',
                        icon:'SPTPPNPPNBM',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                    {
                        subTitle:'SPT PPh Ps.21',
                        icon:'SPTPPhPs21',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                    {
                        subTitle:'Bukti Potong PPh Ps.21',
                        icon:'BuktiPotongPPhPs21',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                ]
            },
            {
                title: 'Pengaturan',
                icon :'mdi-wrench-cog',
                isOpen:false,
                subMenu:[
                    {
                        subTitle:'Preferensi',
                        icon:'mdi-application-cog-outline',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                    {
                        subTitle:'Hak Akses',
                        icon:'mdi-lock-open-variant-outline',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                    {
                        subTitle:'Pengguna',
                        icon:'mdi-account-multiple-outline',
                        routeName:'',
                        isActive:false,
                        isOpen:false
                    },
                ]
            },
        ]
    },
    mutations: {
        addTabData(state, [data, title]) {
            if(state.data[title]) {
                return;
            } else {
                state.data = {
                    ...state.data,
                    [title]: data
                }
            }
        },
        setActiveTab(state, title) {
            state.activeTab = title;
        },
        addComponent(state, [title, data]) {
            state.data[state.activeTab].component = {
                ...state.data[state.activeTab].component,
                [title]: data
            }
        },
        setSecondTabActive(state, title) {
           //menonaktifkan semua component
           Object.keys(state.data[state.activeTab].component).forEach((key) => {
                state.data[state.activeTab].component[key].isActive = false;
           });
           //mengaktifkan component yang dipilih
           if( state.data[state.activeTab].component[title]) {
            state.data[state.activeTab].component[title].isActive = true;
           }
        },
        updateSidebarData(state, index) {
            state.sidebarData.forEach((item, i) => {
                item.isOpen = i === index ? !item.isOpen : false;
            })
        }
    },
    actions: {
        addTabData({ commit }, [data, title]) {
            commit('addTabData', [data, title]);
        },
        setActiveTab({ commit }, title) {
            commit('setActiveTab', title);
        },
        addComponent({ commit }, data) {
            commit('addComponent', data);
        },
        setSecondTabActive({ commit }, title) {
            commit('setSecondTabActive', title);
        },
        updateSidebarData({ commit }, index) {
            commit('updateSidebarData', index);
        }
    },
    getters: {
        navbarData(state) {
            return state.data;
        },
        componentTab(state) {
            return state.data[state.activeTab].component;
        },
        activeTab(state) {
            return state.activeTab;
        },
        secondTabActive(state) {
            return state.secondTabActive;
        },
        sidebarData(state) {
            return state.sidebarData;
        },
        filteredSidebarData(state) {
            return state.sidebarData.flatMap(item => 
                item.subMenu
                .filter(subItem => subItem.isActive)
                .map(subItem => ({
                    subTitle: subItem.subTitle,
                    routeName: subItem.routeName,
                    isActive: subItem.isActive,
                    isOpen: subItem.isOpen
                })));
        }
    },
});

export default store;
