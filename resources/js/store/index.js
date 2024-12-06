import { createStore } from 'vuex';

const store = createStore({
    state: {
        data : {
            dashboard: {
                title: 'dashboard',
                icon: 'dashboard',
                routeName: 'home',
                component: {}
            },
        },
        activeTab: 'dashboard',
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
        },
        setActiveTab(state, title) {
            state.activeTab = title;
        },
        addComponent(state, data) {
            state.data[state.activeTab].component = {
                ...state.data[state.activeTab].component,
                data
            }
        }
    },
    actions: {
        addTabData({ commit }, [data, title]) {
            commit('addTabData', [data, title]);
        },
        setActiveTab({ commit }, title) {
            commit('setActiveTab', title);
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
        }
    },
});

export default store;
