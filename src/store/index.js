import { createStore } from "vuex";

const store = createStore({
    state: {
        count:0
    },
    mutations: {
        increase(state, payload){
            state.count += payload
        }
    },
    actions: {
        add({commit}, payload){
            commit('increase', payload)
        }
    }
})

export default store;