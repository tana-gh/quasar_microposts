<template>
    <t-container>
        <div class="item">
            <div class="username-holder">
                <span class="username">
                    {{ userName }}
                </span>
            </div>
            <div class="button-holder">
                <q-btn class="button" push color="grey-9">
                    {{ followLabel }}
                </q-btn>
            </div>
        </div>
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
@import '~variables'
.item
    display flex
    .username-holder
        width 50%
        text-align     right
        vertical-align middle
        .username
            font-size    36px
            font-weight  bold
            font-variant small-caps
            color $grey-9
    .button-holder
        width 50%
        text-align left
        vertical-align middle
        .button
            margin-left 20px
</style>
