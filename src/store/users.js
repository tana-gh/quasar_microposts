import axios from 'axios'
import * as C from '../constants'

const state = {
    users: []
}

const mutations = {
    getUsers(state, { users }) {
        state.users = users
    },

    resetUsers(state) {
        state.users = []
    }
}

const actions = {
    async getUsers({ commit, rootGetters }) {
        const res = await axios.post(
                C.urlGetUsers,
                {},
                { headers: rootGetters.authHeader }
            )

        if (res.data.status) {
            commit(C.getUsers, { users: res.data.users })
        }
        else {
            commit(C.getUsers, { users: [] })
        }
    },

    async follow({ dispatch, rootGetters }, { user }) {
        const res = await axios.post(
                C.urlFollow,
                { user },
                { headers: rootGetters.authHeader }
            )

        if (res.data.status) {
            await dispatch(C.getUsers)
        }
    },

    async unfollow({ dispatch, rootGetters }, { user }) {
        const res = await axios.post(
                C.urlUnfollow,
                { user },
                { headers: rootGetters.authHeader }
            )

        if (res.data.status) {
            await dispatch(C.getUsers)
        }
    }
}

export default {
    state,
    mutations,
    actions
}
