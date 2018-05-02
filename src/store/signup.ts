import { ActionTree } from 'vuex'
import axios from 'axios'
import * as C from '../constants'
import { RootState } from './root'

const actions: ActionTree<{}, RootState> = {
    async signup({ commit }, { userName, password, passwordConfirmation }) {
        let res
        try {
            res = await axios.post(
                C.urlSignup,
                {
                    user_name: userName,
                    password : password,
                    password_confirmation: passwordConfirmation
                }
            )
        }
        catch (e) {
            commit(C.logout)
            throw e
        }

        if (res.data.status) {
            commit(C.login, { token: res.data.token })
        }
        else {
            commit(C.logout)
        }
    }
}

export default {
    actions
}
