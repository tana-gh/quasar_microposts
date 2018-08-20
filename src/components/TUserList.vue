<template>
    <div>
        <t-user-item
            v-for="user in $store.users.users"
            :key="user.id"
            :user-name="user.name"
            :following=""/>
    </div>
</template>

<script>
import TUserItem from 'TUserItem.vue'
import * as C    from '../constants'

export default {
    components: {
        TUserItem
    },

    async mounted() {
        this.refresh()
    },

    methods: {
        refresh() {
            this.$store.dispatch(C.getUsers)
            this.$store.dispatch(C.getFollowees)
        }
    }
}
</script>

<style lang="stylus" scoped>
</style>
