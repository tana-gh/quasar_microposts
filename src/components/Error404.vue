<template>
    <t-container>
        <h1>404 Page Not Found</h1>
    </t-container>
</template>

<script>
import TContainer from "./TContainer.vue"

export default {
    components: {
        TContainer
    }
}
</script>

<style lang="stylus" scoped>
@import '~variables'
h1
    width 70%
    margin-left  auto
    margin-right auto
    text-align   center
    font-size    67.2px
    font-weight  bold
    font-variant small-caps
    color $grey-9
    border-bottom 6px solid $grey-9
</style>
