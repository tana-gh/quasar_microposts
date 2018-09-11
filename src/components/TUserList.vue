<template>
    <div>
        <q-list separator highlight>
            <q-item
                v-for="user in $store.state.users.users"
                :key="user.id">
                <t-user-item
                    :user-name="user.name"
                    :following="user.following"/>
            </q-item>
        </q-list>
    </div>
</template>

<script>
import { QList, QItem } from 'quasar'
import TUserItem from './TUserItem.vue'
import * as C    from '../constants'
import * as util from '../util'

export default {
    components: {
        QList,
        QItem,
        TUserItem
    },

    async mounted() {
        this.refresh()
    },

    methods: {
        async refresh() {
            await util.waitCondition(
                () => this.$store.state.session.token === ''
            )
            await this.$store.dispatch(C.getUsers)
        }
    }
}
</script>

<style lang="stylus" scoped>
</style>
