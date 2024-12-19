import { createStore } from 'vuex';

const store = createStore({
    state: {
        data : {
            dashboard: {
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
        },
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
                        routeName:''
                    },
                    {
                        subTitle:'Mata Uang',
                        icon:'mdi-cash',
                        routeName:''
                    },
                    {
                        subTitle:'Cabang',
                        icon:'mdi-source-branch',
                        routeName:''
                    },
                    {
                        subTitle:'Departemen',
                        icon:'mdi-chart-bubble',
                        routeName:''
                    },
                    {
                        subTitle:'Karyawan',
                        icon:'mdi-account-tie',
                        routeName:''
                    }
                ]
            },
            {
                title: 'Buku Besar',
                icon :'mdi-book',
                isOpen:false,
                subMenu:[
                    {
                        subTitle:'Akun Perkiraan',
                        icon:'mdi-invoice-list-outline',
                        routeName:''
                    },
                    {
                        subTitle:'Jurnal Umum',
                        icon:'mdi-invoice-text-multiple-outline',
                        routeName:''
                    },
                    {
                        subTitle:'Anggaran',
                        icon:'mdi-contrast-box',
                        routeName:''
                    },
                    {
                        subTitle:'Monitoring Anggaran',
                        icon:'mdi-clipboard-text-search',
                        routeName:''
                    },
                    {
                        subTitle:'Transfer Anggaran',
                        icon:'mdi-format-rotate-90',
                        routeName:''
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
                        routeName:''
                    },
                    {
                        subTitle:'Pembayaran Lainnya',
                        icon:'mdi-cash-multiple',
                        routeName:''
                    },
                    {
                        subTitle:'Transfer Bank',
                        icon:'mdi-bank-transfer',
                        routeName:''
                    },
                    {
                        subTitle:'Rekening Koran',
                        icon:'mdi-book-open-variant-outline',
                        routeName:''
                    },
                    {
                        subTitle:'History Bank',
                        icon:'mdi-history',
                        routeName:''
                    },
                    {
                        subTitle:'Rekonsiliasi Bank',
                        icon:'mdi-bank-plus',
                        routeName:''
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
                        routeName:''
                    },
                    {
                        subTitle:'Pesanan Penjualan',
                        icon:'mdi-cart-arrow-down',
                        routeName:''
                    },
                    {
                        subTitle:'Pengiriman Pesanan',
                        icon:'mdi-truck-fast-outline',
                        routeName:''
                    },
                    {
                        subTitle:'Uang Muka Penjualan',
                        icon:'mdi-cash-fast',
                        routeName:''
                    },
                    {
                        subTitle:'Faktur Penjualan',
                        icon:'mdi-clipboard-edit-outline',
                        routeName:''
                    },
                    {
                        subTitle:'penerimaan Penjualan',
                        icon:'mdi-cart-check',
                        routeName:''
                    },
                    {
                        subTitle:'Retur Penjualan',
                        icon:'mdi-archive-arrow-down-outline',
                        routeName:''
                    },
                    {
                        subTitle:'Kategori Pelanggan',
                        icon:'mdi-account-tag',
                        routeName:''
                    },
                    {
                        subTitle:'Pelanggan',
                        icon:'mdi-account-group',
                        routeName:''
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
                        icon:'PermintaanBarang',
                        routeName:''
                    },
                    {
                        subTitle:'Pemindahan Barang',
                        icon:'PemindahanBarang',
                        routeName:''
                    },
                    {
                        subTitle:'Penyesuaian Barang',
                        icon:'PenyesuaianBarang',
                        routeName:''
                    },
                    {
                        subTitle:'Gudang',
                        icon:'Gudang',
                        routeName:''
                    },
                    {
                        subTitle:'Kategori Barang',
                        icon:'KategoriBarang',
                        routeName:''
                    },
                ]
            },
            {
                title: 'Aset Tetap',
                icon :'AsetTetap',
                isOpen:false,
                subMenu:[
                    {
                        subTitle:'Aset Tetap',
                        icon:'AsetTetap',
                        routeName:''
                    },
                    {
                        subTitle:'Kategori Aset Tetap',
                        icon:'KategoriAsetTetap',
                        routeName:''
                    },
                    {
                        subTitle:'Perubahan Aset Tetap',
                        icon:'PerubahanAsetTetap',
                        routeName:''
                    },
                    {
                        subTitle:'Disposisi Aset Tetap',
                        icon:'DisposisiAsetTetap',
                        routeName:''
                    },
                    {
                        subTitle:'Pemindahan Aset',
                        icon:'PemindahanAset',
                        routeName:''
                    },
                ]
            },
            {
                title: 'Daftar Laporan',
                icon :'DaftarLaporan',
                isOpen:false,
                subMenu:[
                    {
                        subTitle:'Laporan Keuangan',
                        icon:'LaporanKeuangan',
                        routeName:''
                    },
                    {
                        subTitle:'SPT PPN/PPNBM',
                        icon:'SPTPPNPPNBM',
                        routeName:''
                    },
                    {
                        subTitle:'SPT PPh Ps.21',
                        icon:'SPTPPhPs21',
                        routeName:''
                    },
                    {
                        subTitle:'Bukti Potong PPh Ps.21',
                        icon:'BuktiPotongPPhPs21',
                        routeName:''
                    },
                ]
            },
            {
                title: 'Pengaturan',
                icon :'Setting',
                isOpen:false,
                subMenu:[
                    {
                        subTitle:'Preferensi',
                        icon:'Preferensi',
                        routeName:''
                    },
                    {
                        subTitle:'Hak Akses',
                        icon:'HakAkses',
                        routeName:''
                    },
                    {
                        subTitle:'Pengguna',
                        icon:'Pengguna',
                        routeName:''
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
        }
    },
});

export default store;
