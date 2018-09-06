import axios  from 'axios'
import * as C from '../constants'

const state = {
    microposts: {}
}

const mutations = {
    getMicroposts(state, { microposts }) {
        Object.assign(state.microposts, toObject(microposts))
    },

    postMicroposts(state, { micropost }) {
        Object.assign(state.microposts, toObject([micropost]))
    }
}

const actions = {
    async getMicroposts({ commit, rootGetters }, { index, count }) {
        const res = axios.post(
                C.urlGetMicroposts,
                { index, count },
                { headers: rootGetters.authHeader }
            )

        if (res.data.status) {
            commit(C.getMicroposts, { microposts: res.data.microposts })
        }
    },

    async postMicropost({ commit, rootGetters }, { micropost }) {
        const res = axios.post(
                C.urlPostMicropost,
                { micropost },
                { headers: rootGetters.authHeader }
            )

        if (res.data.status) {
            commit(C.postMicropost, { micropost: res.data.micropost })
        }
    }
}

const toObject = array => {
    array.reduce((prev, curr) => {
        prev[curr.id] = curr
    })
}

export default {
    state,
    mutations,
    actions
}
