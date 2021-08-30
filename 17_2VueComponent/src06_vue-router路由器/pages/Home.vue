<template>
    <div>
       
        <h3> home:每个路由对应一个vue文件，用来渲染页面</h3>
        <ul class="nav nav-tabs">
            <li>
                <!-- <router-link to='/home/news' class="router-link-exact-active router-link-active" >News</router-link> -->
                <!-- 当router下的index.js文件设置的name代替path所设置的路径 因为是动态表达式，所以要:to -->
                <router-link :to='{name:"news"}' class="router-link-exact-active router-link-active" >News</router-link> 
            </li>
            <li>
                <router-link to='/home/message'>Meages</router-link>
            
            </li>
        </ul>
        <!-- 在此显示当前路由组件 -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>