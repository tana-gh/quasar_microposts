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

<script>
import { QToolbar, QToolbarTitle, QBtn } from 'quasar'
import TLoginButton  from './TLoginButton.vue'
import TMessageModal from './TMessageModal.vue'
import TSignupModal  from './TSignupModal.vue'
import TLoginModal   from './TLoginModal.vue'

export default {
    components: {
        QToolbar,
        QToolbarTitle,
        QBtn,
        TLoginButton,
        TMessageModal,
        TSignupModal,
        TLoginModal
    }
}
</script>

<style lang="stylus" scoped>
.btn
    width 100px
</style>
