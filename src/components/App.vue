<template>
    <div id="app">
        <q-layout view="hHh LpR lfr">
            <q-layout-header>
                <q-toolbar color="grey-9">
                    <q-btn
                        flat round dense icon="menu"
                        @click="menu = !menu"/>
                    <q-toolbar-title>
                        Quasar Microposts
                    </q-toolbar-title>
                    <t-login-button/>
                </q-toolbar>
            </q-layout-header>

            <q-layout-drawer
                side="left"
                v-model="menu">
                <q-list>
                    <q-item
                        :class="{ disabled: $route.name === 'timeline' }"
                        :highlight="$route.name !== 'timeline'"
                        @click.native="$router.push('timeline')">
                        Timeline
                    </q-item>
                    <q-item
                        :class="{ disabled: $route.name === 'userlist' }"
                        :highlight="$route.name !== 'userlist'"
                        @click.native="$router.push('userlist')">
                        User list
                    </q-item>
                </q-list>
            </q-layout-drawer>

            <q-page-container>
                <router-view/>
            </q-page-container>
        </q-layout>

        <t-message-modal/>
        <t-signup-modal/>
        <t-login-modal/>
    </div>
</template>

<script>
import {
    QLayout,
    QLayoutHeader,
    QPageContainer,
    QLayoutDrawer,
    QToolbar,
    QToolbarTitle,
    QList,
    QItem,
    QBtn
} from 'quasar'
import TLoginButton  from './TLoginButton.vue'
import TMessageModal from './TMessageModal.vue'
import TSignupModal  from './TSignupModal.vue'
import TLoginModal   from './TLoginModal.vue'
import * as C        from '../constants.js'

export default {
    components: {
        QLayout,
        QLayoutHeader,
        QPageContainer,
        QLayoutDrawer,
        QToolbar,
        QToolbarTitle,
        QList,
        QItem,
        QBtn,
        TLoginButton,
        TMessageModal,
        TSignupModal,
        TLoginModal
    },

    data() {
        return {
            menu: false
        }
    },

    created() {
        this.$store.subscribe((mutation, state) => {
            switch (mutation.type) {
                case C.login:
                    this.$router.push({ name: 'timeline' })
                    break

                case C.logout:
                    this.$router.push({ name: 'main' })
                    break
            }
        })
    }
}
</script>

<style lang="stylus" scoped>
.btn
    width 100px
</style>
