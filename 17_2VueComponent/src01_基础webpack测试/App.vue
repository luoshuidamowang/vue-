<template>
    <div>
        <h2>{{ msg }}</h2>
        <HelloWorld/>
        <Hello-World/>
    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue' //原来写法
    // import HelloWorld from './components/HelloWorld'//webpack.config.js配置过忽略解析
    // import HelloWorld from '@/components/HelloWorld' //配置过模块路径别名   
    import HelloWorld from '@com/HelloWorld'  

    export default {
        // name: "App",
        data() {
            return {
            msg: "App.vue组件测试",
            };
        },

        components:{
            HelloWorld
        }
    };
</script>

<style>
div { color: red;}

</style>