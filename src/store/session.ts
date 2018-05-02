import Vuex, { GetterTree, MutationTree, ActionTree } from 'vuex'
import axios from 'axios'
import * as C from '../constants'
import { RootState } from './root'

const state = {
    token  : ''
}

const getters: GetterTree<typeof state, RootState> = {
    isLogin(state) {
        return state.token !== ''
    }
}

const mutations: MutationTree<typeof state> = {
    init(state, { token }) {
        if (token) {
            state.token = token
        }
        else {
            state.token = ''
            localStorage.removeItem(C.tokenKey)
        }
    },

    login(state, { token }) {
        state.token = token
        localStorage.setItem(C.tokenKey, token)
    },

    logout(state) {
        state.token = ''
        localStorage.removeItem(C.tokenKey)
    }
}

const actions: ActionTree<typeof state, RootState> = {
    async init({ commit }, { token }) {
        let res
        try {
            res = await axios.post(
                C.urlIsLogin,
                {},
                {
                    headers: {
                        'Authorization': 'Token ' + token
                    }
                }
            )
        }
        catch (e) {
            commit(C.init, {})
            throw e
        }

        if (res.data.status) {
            commit(C.init, { token })
        }
        else {
            commit(C.init, {})
        }
    },

    async login({ commit }, { userName, password, passwordConfirmation }) {
        let res
        try {
            res = await axios.post(
                C.urlLogin,
                {
                    user_name: userName,
                    password : password,
                    password_confirmation: passwordConfirmation
                }
            )
        }
        catch (e) {
            commit(C.logout)
            throw e
        }

        if (res.data.status) {
            commit(C.login, { token: res.data.token })
        }
        else {
            commit(C.logout)
        }
    },
    
    async logout({ commit, state }) {
        let res
        try {
            res = await axios.post(
                C.urlLogout,
                {},
                {
                    headers: {
                        'Authorization': 'Token ' + state.token
                    }
                })
        }
        catch (e) {
            commit(C.logout)
            throw e
        }

        commit(C.logout)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
