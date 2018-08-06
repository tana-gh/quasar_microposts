<template>
    <div>
        UserList
    </div>
</template>

<script>
import * as C from '../constants'

export default {
    async mounted() {
        await new Promise(async resolve => {
            while (this.$store.state.session.token === '') {
                await new Promise(res => setTimeout(res, 100))
            }
            resolve()
        })
        await this.$store.dispatch(C.getUsers)
        console.log(this.$store.state.users.users)
    }
}
</script>

<style lang="stylus" scoped>
</style>
