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
        console.log(users)
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
        let res
        try {
            res = await axios.post(
                C.urlGetUsers,
                {},
                { headers: rootGetters.session }
            )
        }
        catch (e) {
            throw e
        }

        if (res.data.status) {
            commit(C.getUsers, { users: res.data.users })
        }
        else {
            commit(C.getUsers, { users: [] })
        }
    },

    getFollowees({ commit }) {

    },

    getFollowers({ commit }) {

    },

    follow({ commit }, { user }) {

    },

    unfollow({ commit }, { user }) {

    }
}

export default {
    state,
    mutations,
    actions
}
