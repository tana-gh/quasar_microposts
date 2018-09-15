<template>
    <div>
        {{ micropost }}
    </div>
</template>

<script>
export default {
    props: [
        'id',
        'postedAt',
        'user',
        'micropost'
    ]
}
</script>

<style lang="stylus" scoped>
</style>
