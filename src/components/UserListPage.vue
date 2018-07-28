<template>
    <div>
        UserList
    </div>
</template>

<script>
import * as C from '../constants'

export default {
    created() {
        this.$store.dispatch(C.getUsers)
    }
}
</script>

<style lang="stylus" scoped>
</style>
