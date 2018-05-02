import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from './components/MainPage.vue'
import Error404 from './components/Error404.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    scrollBehavior: (to, from, savedPosition) => ({x: 0, y: 0}),
    routes: [
        { path: '/', component: MainPage },
        { path: '*', component: Error404 }
    ]
})
