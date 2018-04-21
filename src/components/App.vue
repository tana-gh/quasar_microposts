<template>
    <div id="app">
        <q-btn class="hello-button" color="blue">{{ hello }}</q-btn>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { QBtn } from 'quasar'
    export default Vue.extend({
        components: {
            QBtn
        },
        data() {
            return {
                hello: 'Hello, world!'
            }
        }
    })
</script>

<style lang="stylus" scoped>
    #app
        width 100vw
        height 100vh
        display flex
        justify-content center 
        align-items center
</style>
