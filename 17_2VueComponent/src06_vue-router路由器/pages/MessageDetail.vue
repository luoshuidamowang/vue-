/* 在router文件夹下的index.js路由对象里面写props：ture 自动将接收的params参数以标签属性的方式传入路由组件 this.id */  
<template>
    <div>
        <li>ID:{{ id }}</li>
        <li>Title:{{ $route.query.title }}</li>
        <li>Content:{{ content.text }}</li>
        <li>接收query参数key为name的数据name:{{name}} </li>
    </div>
</template>

<script>
const arr = [
    { id: 1, title: "message-xmt001", text: "text1" },
    { id: 2, title: "message-xmt002", text: "text2" },
    { id: 3, title: "message-xmt003", text: "text3" },
];

export default {
    props:['id','name'],
    data() {
        return {
            content: {},
        };
    },

    mounted() {
        setTimeout(() => {
            const id = this.id * 1; // 乘1：把字符串转换为数字
            const item = arr.find((item) => item.id === id);
            this.content = item;
        }, 100);
    },
    watch: {
        $route(to, from) {
            // 对路由变化作出响应...
            setTimeout(() => {  //当请求参数发生改变时，内部指定了新的$router值
                //得到当前新的id
                const id = this.id * 1; // 乘1：把字符串转换为数字
                const item = arr.find((item) => item.id === id);
                this.content = item;
            }, 100);
        },
    },
    //路由组件对象实在第一次请求对应路径的时候才创建
    //从一个路由组件离开，路由组件死亡，再进入需要重新创建
    //当在同一个路由路径上做切换(只是改了参数)，当前路由组件对象都被直接复用
    //同一个组件对象mounted()只执行一次
};
</script>

<style scoped>
</style>