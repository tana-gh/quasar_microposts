import * as C from '../constants'

const state = {
    loading: 0
}

const getters = {
    isLoading(state) {
        return state.loading > 0
    }
}

const mutations = {
    startLoading(state) {
        state.loading++;
    },

    endLoading(state) {
        state.loading--;
    }
}

const actions = {
    startLoading({ commit }) {
        commit(C.startLoading)
    },

    endLoading({ commit }) {
        commit(C.endLoading)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
