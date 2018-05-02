import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './root'
import signup from './signup'
import session from './session'
import modal from './modal'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
    modules: {
        signup,
        session,
        modal
    }
}

export default new Vuex.Store(store)
