<template>
    <q-modal v-model="isOpened" minimized content-css="padding: 50px">
        <p>{{ modalContent }}</p>
        <div class="modal-buttons">
            <q-btn color="green" @click="close()">OK</q-btn>
        </div>
    </q-modal>
</template>

<script>
import { mapGetters } from 'vuex'
import { QModal, QBtn } from 'quasar'
import * as C from '../constants'

export default {
    components: {
        QModal,
        QBtn
    },

    data() {
        return {
            isOpened: false
        }
    },

    computed: {
        ...mapGetters([ C.modalContent ])
    },

    watch: {
        async isOpened(value) {
            await this.$store.dispatch(C.updateModal, {
                name   : value ? C.modalMessage : C.modalNone,
                content: this.modalContent
            })
        }
    },

    created() {
        this.$store.subscribe((mutation, state) => {
            this.isOpened = state.modal.modalName === C.modalMessage
        })
    },

    methods: {
        close() {
            this.isOpened = false
        }
    }
}
</script>

<style lang="stylus" scoped>
.modal-buttons
    display flex
    justify-content flex-end
</style>
