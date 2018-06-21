<template>
    <q-btn class="login-button" @click="onClick()" push>{{ buttonContent }}</q-btn>
</template>

<script>
import { mapGetters } from 'vuex'
import { QBtn } from 'quasar'
import * as C from '../constants'

export default {
    components: {
        QBtn
    },

    computed: {
        ...mapGetters([ C.isLogin ]),

        buttonContent() {
            return this.isLogin ? 'Log out' : 'Log in'
        }
    },

    methods: {
        async onClick() {
            if (this.isLogin) {
                try {
                    await this.$store.dispatch(C.logout)
                }
                catch (e) {
                    console.log(e)
                }
            }
            else {
                this.$store.dispatch(C.updateModal, {
                    name: C.modalLogin
                })
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.login-button
    width 100px
</style>
