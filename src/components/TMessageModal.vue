<template>
    <q-modal v-model="isOpened" minimized content-css="padding: 50px">
        <p>{{ modalContent }}</p>
        <div class="modal-buttons">
            <q-btn color="green" @click="close()">OK</q-btn>
        </div>
    </q-modal>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Getter } from 'vuex-class'
import { QModal, QBtn } from 'quasar'
import * as C from '../constants'

@Component({
    components: {
        QModal,
        QBtn
    },
    watch: {
        isOpened(value) {
            const modal = <TMessageModal>this
            this.$store.dispatch(C.updateModal, {
                name   : value ? C.modalMessage : C.modalNone,
                content: modal.modalContent
            })
        }
    }
})
export default class TMessageModal extends Vue {
    isOpened = false

    @Getter(C.modalContent)
    modalContent: any

    created() {
        this.$store.subscribe((mutation, state) => {
            this.isOpened = state.modal.modalName === C.modalMessage
        })
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
