<template>
    <div class="container">
        <span class="user">
            {{ user }}
        </span>
        <span class="posted-at">
            {{ postedAt | moment('YYYY/MM/DD HH:mm:ss') }}
        </span>
        <span class="micropost">
            {{ micropost }}
        </span>
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
@import '~variables'
.container
    display grid
    grid-template-rows    40px  20px
    grid-template-columns 128px 1fr
    color $grey-9
    .user
        grid-row    1
        grid-column 1
        font-size   28px
        font-weight bold
    .posted-at
        grid-row    2
        grid-column 1
        font-size   10px
        color $grey-5
    .micropost
        grid-row    1 / 2
        grid-column 2
</style>
