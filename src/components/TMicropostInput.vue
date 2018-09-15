<template>
    <div class="all">
        <transition name="focus">
            <q-input
                class="input"
                v-model="micropost"
                type="textarea"
                float-label="Micropost here."
                :max-height="40"
                :color="color"
                inverted
                @focus="setFocus(true)"
                @blur="setFocus(false)"/>
        </transition>
        <div class="button-holder">
            <q-btn
                class="button" push color="grey-9"
                :disable="micropost == ''"
                @click="post()">
                Post
            </q-btn>
        </div>
    </div>
</template>

<script>
import { QInput, QBtn } from 'quasar'
import * as C from '../constants'

export default {
    components: {
        QInput,
        QBtn
    },

    data() {
        return {
            micropost: '',
            color: 'grey-6'
        }
    },

    methods: {
        async post() {
            await this.$store.dispatch(C.postMicropost, { micropost: this.micropost })
        },

        setFocus(focus) {
            this.color = focus ? 'grey-3 text-grey-9' : 'grey-6'
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~variables'
.all
    margin 1em
.button-holder
    margin-top 0.5em
    width 100%
    text-align right
    .button
        width 10em
.focus-enter-active, .focus-leave-active
    transition color            0.5s
    transition background-color 0.5s
</style>
