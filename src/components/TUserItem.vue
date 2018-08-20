<template>
    <t-container>
        <div class="username">
            {{ userName }}
        </div>
        <q-btn push color="gray-9">
            {{ followLabel }}
        </q-btn>
    </t-container>
</template>


<script>
import { QBtn }   from 'quasar'
import TContainer from 'TContainer.vue'

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
        followLabel: () => this.following ? 'Unfollow' : 'Follow'
    }
}
</script>

<style lang="stylus" scoped>
</style>
