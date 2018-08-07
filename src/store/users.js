import axios from 'axios'
import * as C from '../constants'

const state = {
    users    : [],
    followees: [],
    followers: []
}

const mutations = {
    getUsers(state, { users }) {
        state.users = users
    },

    getFollowees(state, { followees }) {
        state.followees = followees
    },

    getFollowers(state, { followers }) {
        state.followers = followers
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

    async getFollowees({ commit, rootGetters }) {
        const res = await axios.post(
                C.urlGetFollowees,
                {},
                { headers: rootGetters.authHeader }
            )

        if (res.data.status) {
            commit(C.getFollowees, { followees: res.data.users })
        }
        else {
            commit(C.getFollowees, { followees: [] })
        }
    },

    async getFollowers({ commit, rootGetters }) {
        const res = await axios.post(
                C.urlGetFollowers,
                {},
                { headers: rootGetters.authHeader }
            )

        if (res.data.status) {
            commit(C.getFollowers, { followers: res.data.users })
        }
        else {
            commit(C.getFollowers, { followers: [] })
        }
    },

    async follow({ commit, state, rootGetters }, { user }) {
        const res = await axios.post(
                C.urlFollow,
                { user },
                { headers: rootGetters.authHeader }
            )

        if (res.data.status) {
            commit(C.getFollowees, {
                followees: state.followees.concat([user])
            })
        }
    },

    async unfollow({ commit, state, rootGetters }, { user }) {
        const res = await axios.post(
                C.urlUnfollow,
                { user },
                { headers: rootGetters.authHeader }
            )

        if (res.data.status) {
            commit(C.getFollowees, {
                followees: state.followees.filter(x => x != user)
            })
        }
    }
}

export default {
    state,
    mutations,
    actions
}
