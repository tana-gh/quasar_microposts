import axios  from 'axios'
import * as C from '../constants'

const state = {
    microposts: {}
}

const mutations = {
    getMicroposts(state, { microposts }) {
        state.microposts = Object.assign({ ...state.microposts }, toObject(microposts))
    },

    postMicropost(state, { microposts }) {
        state.microposts = Object.assign({ ...state.microposts }, toObject(microposts))
    },

    resetMicroposts(state) {
        state.microposts = {}
    }
}

const actions = {
    async getMicroposts({ commit, rootGetters }, { index, count }) {
        const res = await axios.post(
                C.urlGetMicroposts,
                { index, count },
                { headers: rootGetters.authHeader }
            )

        if (res.data.status) {
            commit(C.getMicroposts, { microposts: res.data.microposts })
        }
    },

    async postMicropost({ commit, rootGetters }, { micropost }) {
        const res = await axios.post(
                C.urlPostMicropost,
                { micropost },
                { headers: rootGetters.authHeader }
            )

        if (res.data.status) {
            commit(C.postMicropost, { microposts: res.data.microposts })
        }
    }
}

const toObject = array => {
    const obj = {}
    array.forEach(m => {
        obj[m.id] = m
    })
    return obj
}

export default {
    state,
    mutations,
    actions
}
