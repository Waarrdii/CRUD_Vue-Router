import { createStore } from 'vuex';

const store = createStore({
    state: {
        data : {
            Dashboard: {
                title: 'Dashboard',
                icon: 'dashboard',
                routeName: 'home',
                component: ['example', 'usersIndex', 'permissionList']
            },
        },
        activeTab: 'Dashboard',
        activeComponent: null
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
        }
    },
    actions: {
        addTabData({ commit }, [data, title]) {
            commit('addTabData', [data, title]);
        }
    },
    getters: {
        navbarData(state) {
            return state.data;
        },
        componentTab(state) {
            return state.data[state.activeTab].component;
        }
    },
});

export default store;
