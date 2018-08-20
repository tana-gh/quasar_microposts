import * as C from '../constants'

const state = {
    modalName   : C.modalNone,
    modalContent: ''
}

const getters = {
    modalContent(state) {
        return state.modalContent
    }
}

const mutations = {
    updateModal(state, { name, content }) {
        state.modalContent = content
        state.modalName    = name
    }
}

const actions = {
    updateModal({ commit }, { name, content = '' }) {
        commit(C.updateModal, { name, content })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
