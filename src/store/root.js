
const rootGetters = {
    auth(state, getters) {
        return getters.authHeader
    }
}

export default {
    getters: rootGetters
}
