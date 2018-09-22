<template>
    <div>
        <div v-if="$store.getters.isLoading">
            <q-spinner-puff color="grey-9" size="128"/>
        </div>
        <div v-else>
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
    </div>
</template>

<script>
import { QList, QItem, QSpinnerPuff } from 'quasar'
import TUserItem from './TUserItem.vue'
import * as C    from '../constants'
import * as Util from '../util'

export default {
    components: {
        QList,
        QItem,
        TUserItem
    },

    async mounted() {
        await this.refresh()
    },

    methods: {
        async refresh() {
            await Util.waitCondition(
                () => !this.$store.getters.isLogin
            )
            await this.$store.dispatch(C.getUsers)
        }
    }
}
</script>

<style lang="stylus" scoped>
</style>
