<template>
    <q-modal v-model="isOpened" minimized content-css="padding: 50px">
        <q-input class="modal-text" type="text"     v-model="userName" float-label="User name"/>
        <q-input class="modal-text" type="password" v-model="password" float-label="Password"/>
        <q-input class="modal-text" type="password" v-model="passwordConfirmation" float-label="Retype password"/>
        <div class="modal-buttons">
            <q-btn color="red"   @click="close()" >Cancel</q-btn>
            <q-btn color="green" @click="signup()">Signup</q-btn>
        </div>
    </q-modal>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { QModal, QInput, QBtn } from 'quasar'
import * as C from '../constants'

@Component({
    components: {
        QModal,
        QInput,
        QBtn
    },
    watch: {
        isOpened(value) {
            const modal = <TSignupModal>this
            modal.userName = ''
            modal.password = ''
            modal.passwordConfirmation = ''
            this.$store.dispatch(C.updateModal, {
                name: value ? C.modalSignup : C.modalNone
            })
        }
    }
})
export default class TSignupModal extends Vue {
    isOpened = false
    userName = ''
    password = ''
    passwordConfirmation = ''

    created() {
        this.$store.subscribe((mutation, state) => {
            this.isOpened = state.modal.modalName === C.modalSignup
        })
    }

    async signup() {
        this.close()
        try {
            await this.$store.dispatch(C.signup, {
                userName: this.userName,
                password: this.password,
                passwordConfirmation: this.passwordConfirmation
            })
        }
        catch (e) {
            console.log(e)
            this.$store.dispatch(C.updateModal, {
                name   : C.modalMessage,
                content: 'Signup failed.'
            })
        }
    }
    
    close() {
        this.isOpened = false
    }
}
</script>

<style lang="stylus" scoped>
.modal-text
    width 50vw
.modal-buttons
    display flex
    justify-content flex-end
</style>
