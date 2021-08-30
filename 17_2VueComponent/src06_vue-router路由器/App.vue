<template>
    <div>
        <div class="row">
            <div class="col-xs-offset-2 col-xs-8">
                <div class="page-header"><h2>Router 练习App.vue文件</h2></div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">
                    <!-- 路由链接 -->
                    <router-link class="list-group-item" to="/about">   About   </router-link>
                    <router-link class="list-group-item" to="/home">    Home    </router-link>
                </div>
            </div>
            <div class="col-xs-6">
                <div class="panel">
                    <div class="panel-body">

                        <!-- include:指定需要缓存的组件     exclude：指定不需要缓存的组件 -->
                       <keep-alive include="About-xmt"   exclude="Message-xmt"> <!-- 包住需要缓存的渲染显示模板 ：达到缓存效果 -->
                           <router-view>z</router-view>    <!-- 在此显示当前路由组件,当前：与请求的路径匹配的路由 -->
                       </keep-alive>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>
   

<style scoped>
</style>