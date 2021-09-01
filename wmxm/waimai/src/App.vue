<template>
    <div>
        <h1>App组件</h1>
        <p>测试适配----没做适配</p>
        <div class="box">测试适配----做了适配</div>
    </div>
</template>

<script>
export default {
};
</script>

<style scoped lang="stylus">
    @import './common/stylus/mixins.styl'

    h1 
        color $color

    p
        width 375px
        height 100px
        background green        

    .box
        width 10rem        /* 37.5px  在iphone678p下，宽为375，设置根元素字体为375,及1rem=375px*/
        height  1rem
        background red

</style>

