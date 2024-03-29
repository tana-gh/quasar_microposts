import axios from 'axios'
import * as C from '../constants'

const actions = {
    async signup({ commit }, { userName, password, passwordConfirmation }) {
        const res = await axios.post(
                C.urlSignup,
                {
                    user_name: userName,
                    password : password,
                    password_confirmation: passwordConfirmation
                }
            )
            .catch(e => { commit(C.logout); throw e })

        if (res.data.status) {
            commit(C.login, { token: res.data.token })
        }
        else {
            dispatch(C.reset)
        }
    }
}

export default {
    actions
}
