import { createStore } from 'vuex';

const store = createStore({
    state: {
        data : {
            Dashboard: {
                title: 'Dashboard',
                icon: 'dashboard',
                routeName: 'home',
            },
        },
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
        }
    },
});

export default store;
