import { MutationTree, ActionTree, GetterTree } from 'vuex'
import * as C from '../constants'
import { RootState } from './root'

const state = {
    modalName   : C.modalNone,
    modalContent: ''
}

const getters: GetterTree<typeof state, RootState> = {
    modalContent(state) {
        return state.modalContent
    }
}

const mutations: MutationTree<typeof state> = {
    updateModal(state, { name, content }) {
        state.modalContent = content
        state.modalName    = name
    }
}

const actions: ActionTree<typeof state, RootState> = {
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
