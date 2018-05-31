import Vue          from 'vue'
import VueRouter    from 'vue-router'
import MainPage     from './components/MainPage.vue'
import TimelinePage from './components/TimelinePage.vue'
import Error404     from './components/Error404.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    scrollBehavior: (to, from, savedPosition) => ({x: 0, y: 0}),
    routes: [
        { name: 'main'    , path: '/'        , component: MainPage     },
        { name: 'timeline', path: '/timeline', component: TimelinePage },
        { name: '404'     , path: '*'        , component: Error404     }
    ]
})
