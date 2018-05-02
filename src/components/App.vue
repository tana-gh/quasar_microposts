<template>
    <div id="app">
        <q-toolbar color="grey-9">
            <q-toolbar-title>
                Quasar Microposts
            </q-toolbar-title>
            <t-login-button/>
        </q-toolbar>

        <router-view/>

        <t-message-modal/>
        <t-signup-modal/>
        <t-login-modal/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { QToolbar, QToolbarTitle, QBtn } from 'quasar'
import TLoginButton  from './TLoginButton.vue'
import TMessageModal from './TMessageModal.vue'
import TSignupModal  from './TSignupModal.vue'
import TLoginModal   from './TLoginModal.vue'

@Component({
    components: {
        QToolbar,
        QToolbarTitle,
        QBtn,
        TLoginButton,
        TMessageModal,
        TSignupModal,
        TLoginModal
    }
})
export default class App extends Vue {
}
</script>

<style lang="stylus" scoped>
.btn
    width 100px
</style>
