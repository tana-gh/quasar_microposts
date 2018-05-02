import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Quasar from 'quasar'
import Vuelidate from 'vuelidate'
import router from './router'
import store from './store'
import App from './components/App.vue'

import 'quasar-framework/dist/quasar.mat.styl'
import 'quasar-extras/roboto-font'
import 'quasar-extras/material-icons'
import 'quasar-extras/animate'

Vue.use(Quasar)
Vue.use(Vuelidate)

const vue = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
