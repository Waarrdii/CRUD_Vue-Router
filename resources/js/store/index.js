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
                icon :'Perusahaan',
                isOpen:false,
                subMenu:[
                    {
                        subTitle:'Profil Perusahaan',
                        icon:'ProfilPerusahaan',
                        routeName:''
                    },
                    {
                        subTitle:'Mata Uang',
                        icon:'MataUang',
                        routeName:''
                    },
                    {
                        subTitle:'Cabang',
                        icon:'Cabang',
                        routeName:''
                    },
                    {
                        subTitle:'Departemen',
                        icon:'Departemen',
                        routeName:''
                    },
                    {
                        subTitle:'Karyawan',
                        icon:'Karyawan',
                        routeName:''
                    }
                ]
            },
            {
                title: 'Buku Besar',
                icon :'BukuBesar',
                isOpen:false,
                subMenu:[
                    {
                        subTitle:'Akun Perkiraan',
                        icon:'AkunPerkiraan',
                        routeName:''
                    },
                    {
                        subTitle:'Jurnal Umum',
                        icon:'JurnalUmum',
                        routeName:''
                    },
                    {
                        subTitle:'Anggaran',
                        icon:'Anggaran',
                        routeName:''
                    },
                    {
                        subTitle:'Monitoring Anggaran',
                        icon:'MonitoringAnggaran',
                        routeName:''
                    },
                    {
                        subTitle:'Transfer Anggaran',
                        icon:'TransferAnggaran',
                        routeName:''
                    },
                ]
            },
            {
                title: 'Kas & Bank',
                icon :'KasBank',
                isOpen:false,
                subMenu:[
                    {
                        subTitle:'Penerimaan Lainnya',
                        icon:'PenerimaanLainnya',
                        routeName:''
                    },
                    {
                        subTitle:'Pembayaran Lainnya',
                        icon:'PembayaranLainnya',
                        routeName:''
                    },
                    {
                        subTitle:'Transfer Bank',
                        icon:'PembayaranLainnya',
                        routeName:''
                    },
                    {
                        subTitle:'Rekening Koran',
                        icon:'RekeningKoran',
                        routeName:''
                    },
                    {
                        subTitle:'History Bank',
                        icon:'HistoryBank',
                        routeName:''
                    },
                    {
                        subTitle:'Rekonsiliasi Bank',
                        icon:'RekonsiliasiBank',
                        routeName:''
                    },
                ]
            },
            {
                title: 'Penjualan',
                icon :'Penjualan',
                isOpen:false,
                subMenu:[
                    {
                        subTitle:'Penawaran Penjualan',
                        icon:'PenawaranPenjualan',
                        routeName:''
                    },
                    {
                        subTitle:'Pesanan Penjualan',
                        icon:'PesananPenjualan',
                        routeName:''
                    },
                    {
                        subTitle:'Pengiriman Pesanan',
                        icon:'PengirimanPesanan',
                        routeName:''
                    },
                    {
                        subTitle:'Uang Muka Penjualan',
                        icon:'UangMukaPenjualan',
                        routeName:''
                    },
                    {
                        subTitle:'Faktur Penjualan',
                        icon:'FakturPenjualan',
                        routeName:''
                    },
                    {
                        subTitle:'penerimaan Penjualan',
                        icon:'penerimaanPenjualan',
                        routeName:''
                    },
                    {
                        subTitle:'Retur Penjualan',
                        icon:'ReturPenjualan',
                        routeName:''
                    },
                    {
                        subTitle:'Kategori Pelanggan',
                        icon:'KategoriPelanggan',
                        routeName:''
                    },
                    {
                        subTitle:'Pelanggan',
                        icon:'Pelanggan',
                        routeName:''
                    },
                ]
            },
            {
                title: 'Pembelian',
                icon :'Pembelian',
                isOpen:false,
                subMenu:[
                    {
                        subTitle:'Pesanan Pembelian',
                        icon:'PesananPembelian',
                        routeName:''
                    },
                    {
                        subTitle:'Penerimaan Barang',
                        icon:'PenerimaanBarang',
                        routeName:''
                    },
                    {
                        subTitle:'Uang Muka Pembelian',
                        icon:'UangMukaPembelian',
                        routeName:''
                    },
                    {
                        subTitle:'Faktur Pembelian',
                        icon:'FakturPembelian',
                        routeName:''
                    },
                    {
                        subTitle:'Pembayaran Pembelian',
                        icon:'PembayaranPembelian',
                        routeName:''
                    },
                    {
                        subTitle:'Retur Pembelian',
                        icon:'ReturPembelian',
                        routeName:''
                    },
                    {
                        subTitle:'Kategori Pemasok',
                        icon:'KategoriPemasok',
                        routeName:''
                    },
                    {
                        subTitle:'Pemasok',
                        icon:'Pemasok',
                        routeName:''
                    },
                ]
            },
            {
                title: 'Persediaan',
                icon :'Persediaan',
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
