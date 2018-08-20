<template>
    <div>
        UserList
    </div>
</template>

<script>
import * as C    from '../constants'
import * as util from '../util.js'

export default {
    async mounted() {
        await util.waitCondition(
            () => this.$store.state.session.token === ''
        )
        await this.$store.dispatch(C.getUsers)
        console.log(this.$store.state.users.users)
    }
}
</script>

<style lang="stylus" scoped>
</style>
