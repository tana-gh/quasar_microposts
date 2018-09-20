<template>
    <div>
        <t-micropost-input/>
        <t-micropost-list count="20"/>
    </div>
</template>

<script>
import TMicropostInput from './TMicropostInput.vue'
import TMicropostList  from './TMicropostList.vue'

export default {
    components: {
        TMicropostInput,
        TMicropostList
    }
}
</script>

<style lang="stylus" scoped>
</style>
