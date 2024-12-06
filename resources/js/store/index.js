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
        secondTabActive : '',
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
        setSecondTabActive(state, title) {
            state.secondTabActive = title;
        },
        addComponent(state, [title, data]) {
            state.data[state.activeTab].component = {
                ...state.data[state.activeTab].component,
                [title]: data
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
        setSecondTabActive ({ commit }, title) {
            commit('setSecondTabActive', title);
        },
        addComponent({ commit }, data) {
            commit('addComponent', data);
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
