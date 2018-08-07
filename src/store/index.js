import Vue        from 'vue'
import Vuex       from 'vuex'
import root       from './root'
import signup     from './signup'
import session    from './session'
import users      from './users'
import microposts from './microposts'
import modal      from './modal'

Vue.use(Vuex)

export default new Vuex.Store({
    ...root,
    modules: {
        signup,
        session,
        users,
        microposts,
        modal
    }
})
