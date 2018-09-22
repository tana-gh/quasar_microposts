import axios from 'axios'
import * as C from '../constants'

const state = {
    authentication: C.unknownState,
    token : '',
    myUser: null
}

const getters = {
    authHeader(state) {
        return authHeader(state.token)
    },
    
    isLogin(state) {
        return state.authentication === C.loginState
    }
}

const mutations = {
    init(state, { token, user }) {
        if (token) {
            state.authentication = C.loginState
            state.token  = token
            state.myUser = user
        }
        else {
            state.authentication = C.logoutState
            state.token  = ''
            state.myUser = null
            localStorage.removeItem(C.tokenKey)
        }
    },

    login(state, { token, user }) {
        state.authentication = C.login
        state.token  = token
        state.myUser = user
        localStorage.setItem(C.tokenKey, token)
    },

    logout(state) {
        state.authentication = C.logoutState
        state.token  = ''
        state.myUser = null
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
            dispatch(C.reset)
        }
    },
    
    async logout({ dispatch, commit, rootGetters }) {
        const res = await axios.post(
                C.urlLogout,
                {},
                { headers: rootGetters.authHeader }
            )
            .catch(e => { commit(C.logout); throw e })

        dispatch(C.reset)
    },

    reset({ commit }) {
        commit(C.logout)
        commit(C.resetUsers)
        commit(C.resetMicroposts)
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
