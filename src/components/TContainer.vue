<template>
    <div class=container><slot/></div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class TContainer extends Vue {
}
</script>

<style lang="stylus">
.container
    width 100%
</style>
