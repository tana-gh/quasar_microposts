<template>
    <t-container>
        <span class="username">
            {{ userName }}
        </span>
        <q-btn push color="grey-9">
            {{ followLabel }}
        </q-btn>
    </t-container>
</template>


<script>
import { QBtn }   from 'quasar'
import TContainer from './TContainer.vue'

export default {
    components: {
        QBtn,
        TContainer
    },
    
    props: [
        'userName',
        'following'
    ],

    computed: {
        followLabel() {
            return this.following ? 'Unfollow' : 'Follow'
        }
    }
}
</script>

<style lang="stylus" scoped>
</style>
