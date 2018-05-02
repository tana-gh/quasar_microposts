<template>
    <t-container>
        <h1>404 Page Not Found</h1>
    </t-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import TContainer from "./TContainer.vue"

@Component({
    components: {
        TContainer
    }
})
export default class Error404 extends Vue {
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
