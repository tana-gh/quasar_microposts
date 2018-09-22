<template>
    <div>
        <div v-if="$store.getters.isLoading">
            <q-spinner-puff color="grey-9" size="128"/>
        </div>
        <div v-else>
            <q-list separator highlight>
                <q-item v-for="m in micropostValues" :key="m.id">
                    <t-micropost-item
                        :id="m.id"
                        :posted-at="m.posted_at"
                        :user="m.user"
                        :micropost="m.micropost"/>
                </q-item>
            </q-list>
            <div class="button-holder">
                <q-btn
                    class="button"
                    push color="grey-9"
                    @click="getMicroposts(currentIndex, count)">
                    More...
                </q-btn>
            </div>
        </div>
    </div>
</template>

<script>
import { QList, QItem, QBtn, QSpinnerPuff } from 'quasar'
import TMicropostItem from './TMicropostItem.vue'
import * as C    from '../constants'
import * as Util from '../util'

export default {
    components: {
        QList,
        QItem,
        QBtn,
        TMicropostItem
    },

    props: [
        'count',
        'onPost'
    ],

    data() {
        return {
            currentIndex: 0
        }
    },

    async mounted() {
        await this.getMicroposts(this.currentIndex, this.count)
    },

    computed: {
        micropostValues() {
            return Object.values(this.$store.state.microposts.microposts)
        }
    },

    methods: {
        async getMicroposts(index, count) {
            await Util.waitCondition(
                () => !this.$store.getters.isLogin
            )
            await this.$store.dispatch(C.getMicroposts, { index, count })
            this.currentIndex = Util.objectKeyCount(this.$store.state.microposts.microposts)
        }
    }
}
</script>

<style lang="stylus" scoped>
.button-holder
    width 100%
    text-align right
    .button
        margin 0.5em
</style>
