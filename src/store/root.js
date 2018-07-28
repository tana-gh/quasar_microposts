
const rootGetters = {
    session(state) {
        return {
            'Authorization': 'Token ' + state.session.token
        }
    }
}

export default {
    getters: rootGetters
}
