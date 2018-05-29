import Vue     from 'vue'
import Vuex    from 'vuex'
import signup  from './signup'
import session from './session'
import modal   from './modal'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        signup,
        session,
        modal
    }
})
