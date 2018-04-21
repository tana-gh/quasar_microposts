import Vue from 'vue'
import Quasar, * as Q from 'quasar'
import Vuelidate from 'vuelidate'
import App from './components/App.vue'

import 'quasar-framework/dist/quasar.mat.styl'
import 'quasar-extras/roboto-font'
import 'quasar-extras/material-icons'
import 'quasar-extras/animate'

Vue.use(Quasar)
Vue.use(Vuelidate)

const vue = new Vue({
    el: '#app',
    render: h => h(App)
})
