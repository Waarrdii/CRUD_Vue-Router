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
        }
    },
});

export default store;
