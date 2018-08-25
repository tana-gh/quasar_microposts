import axios from 'axios'
import * as C from '../constants'

const state = {
    token : '',
    myUser: null
}

const getters = {
    authHeader(state) {
        return authHeader(state.token)
    },
    
    isLogin(state) {
        return state.token !== ''
    }
}

const mutations = {
    init(state, { token, user }) {
        if (token) {
            state.token  = token
            state.myUser = user
        }
        else {
            state.token  = ''
            state.myUser = null
            localStorage.removeItem(C.tokenKey)
        }
    },

    login(state, { token, user }) {
        state.token  = token
        state.myUser = user
        localStorage.setItem(C.tokenKey, token)
    },

    logout(state) {
        state.token = ''
        localStorage.removeItem(C.tokenKey)
    }
}

const actions = {
    async init({ commit }, { token }) {
        const res = await axios.post(
                C.urlIsLogin,
                {},
                { headers: authHeader(token) }
            )
            .catch(e => { commit(C.init, {}); throw e })
        
        if (res.data.status) {
            commit(C.init, { token, user: res.data.user })
        }
        else {
            commit(C.init, {})
        }
    },

    async login({ commit }, { userName, password, passwordConfirmation }) {
        const res = await axios.post(
                C.urlLogin,
                {
                    user_name: userName,
                    password : password,
                    password_confirmation: passwordConfirmation
                }
            )
            .catch(e => { commit(C.logout); throw e })

        if (res.data.status) {
            commit(C.login, { token: res.data.token, user: res.data.user })
        }
        else {
            commit(C.logout)
        }
    },
    
    async logout({ commit, rootGetters }) {
        const res = await axios.post(
                C.urlLogout,
                {},
                { headers: rootGetters.authHeader }
            )
            .catch(e => { commit(C.logout); throw e })

        commit(C.logout)
    }
}

const authHeader = (token) => {
    return {
        'Authorization': 'Token ' + token
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
