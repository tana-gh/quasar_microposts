<template>
    <q-btn class="login-button" @click="onClick()" push>{{ buttonContent }}</q-btn>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Getter } from 'vuex-class'
import { QBtn } from 'quasar'
import * as C from '../constants'

@Component({
    components: {
        QBtn
    }
})
export default class TLoginButton extends Vue {
    @Getter(C.isLogin)
    isLogin: any
    
    get buttonContent() {
        return this.isLogin ? 'Log out' : 'Log in'
    }

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
</script>

<style lang="stylus" scoped>
.login-button
    width 100px
</style>
