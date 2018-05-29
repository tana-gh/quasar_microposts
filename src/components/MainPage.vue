<template>
    <div>
        <t-container>
            <h1 class="content">Quasar Microposts</h1>
            <div class="content">
                Please <a @click="login()">Login</a>, Or <a @click="signup()">Signup</a>.
            </div>
        </t-container>
    </div>
</template>

<script>
import * as C from '../constants'
import { QBtn } from 'quasar'
import TContainer from './TContainer.vue'

export default {
    components: {
        QBtn,
        TContainer
    },
    
    methods: {
        async login() {
            await this.$store.dispatch(C.updateModal, {
                name: C.modalLogin
            })
        },
        
        async signup() {
            await this.$store.dispatch(C.updateModal, {
                name: C.modalSignup
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~variables'
.content
    width 70%
    margin-left  auto
    margin-right auto
    text-align   center
    font-weight  bold
    font-variant small-caps
    color $grey-9
    a
        color $blue-6
h1.content
    font-size 67.2px
    border-bottom 6px solid $grey-9
</style>
