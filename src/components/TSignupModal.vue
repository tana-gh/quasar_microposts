<template>
    <q-modal v-model="isOpened" minimized content-css="padding: 50px">
        <q-input class="modal-text" type="text"     v-model="userName"             float-label="User name"       :error="$v.userName.$error"             @blur="$v.userName.$touch"            />
        <q-input class="modal-text" type="password" v-model="password"             float-label="Password"        :error="$v.password.$error"             @blur="$v.password.$touch"            />
        <q-input class="modal-text" type="password" v-model="passwordConfirmation" float-label="Retype password" :error="$v.passwordConfirmation.$error" @blur="$v.passwordConfirmation.$touch"/>
        <div class="modal-buttons">
            <q-btn color="red"   @click="close()">Cancel</q-btn>
            <q-btn color="green" @click="signup()" :disable="anyError">Signup</q-btn>
        </div>
    </q-modal>
</template>

<script>
import { QModal, QInput, QBtn } from 'quasar'
import * as C from '../constants'

export default {
    components: {
        QModal,
        QInput,
        QBtn
    },

    data() {
        return {
            isOpened: false,
            userName: '',
            password: '',
            passwordConfirmation: ''
        }
    },

    computed: {
        anyError() {
            return this.userName === ''    ||
                   this.password === ''    ||
                   this.passwordConfirmation === '' ||
                   this.$v.userName.$error ||
                   this.$v.password.$error ||
                   this.$v.passwordConfirmation.$error
        }
    },

    watch: {
        isOpened(value) {
            this.userName = ''
            this.password = ''
            this.passwordConfirmation = ''
            this.$store.dispatch(C.updateModal, {
                name: value ? C.modalSignup : C.modalNone
            })
            this.resetValidation()
        }
    },

    created() {
        this.$store.subscribe((mutation, state) => {
            this.isOpened = state.modal.modalName === C.modalSignup
        })
    },

    methods: {
        async signup() {
            this.close()
            await this.$store.dispatch(C.signup, {
                    userName: this.userName,
                    password: this.password,
                    passwordConfirmation: this.passwordConfirmation
                })
                .catch(e => {
                    console.log(e)
                    this.$store.dispatch(C.updateModal, {
                        name   : C.modalMessage,
                        content: 'Signup failed.'
                    })
                })
        },
        
        close() {
            this.isOpened = false
        },

        resetValidation() {
            this.$v.userName.$reset()
            this.$v.password.$reset()
            this.$v.passwordConfirmation.$reset()
        }
    },

    validations: {
        userName: {
            length(value) {
                return value.length <= 60
            },
            regExp(value) {
                return /^[\-\w]+$/.test(value)
            }
        },

        password: {
            length(value) {
                return value.length >= 4
            },
            regExp(value) {
                return /^[^\s]+$/.test(value)
            }
        },

        passwordConfirmation: {
            password(value) {
                return value === this.password
            }
        }
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
