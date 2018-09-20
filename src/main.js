import Vue       from 'vue'
import Quasar    from 'quasar'
import Vuelidate from 'vuelidate'
import VueMoment from 'vue-moment'
import router    from './router'
import store     from './store'
import App       from './components/App.vue'
import * as C    from './constants'

import 'quasar-framework/dist/quasar.mat.styl'
import 'quasar-extras/roboto-font'
import 'quasar-extras/material-icons'
import 'quasar-extras/animate'

Vue.use(Quasar)
Vue.use(Vuelidate)
Vue.use(VueMoment)

const vue = new Vue({
    el: '#app',
    router,
    store,
    async created() {
        const token = localStorage.getItem(C.tokenKey)
        if (token !== null) {
            await this.$store.dispatch(C.init, { token })
        }
    },
    render: h => h(App)
})
