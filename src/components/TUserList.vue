<template>
    <div>
        <t-user-item
            v-for="user in $store.state.users.users"
            :key="user.id"
            :user-name="user.name"
            :following="user.following"/>
    </div>
</template>

<script>
import TUserItem from './TUserItem.vue'
import * as C    from '../constants'
import * as util from '../util'

export default {
    components: {
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
