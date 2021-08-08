//原本找：dist/vue.runtime.common.js
//现查找：vue/dist/vue.esm.js 因为webpack.config.js文件设置过alias设置过精准匹配
import Vue from 'vue'
import App from './App'

//全局注册组件
// import HelloWorld from './components/HelloWorld.vue'
// Vue.component('HelloWorld',HelloWorld)

Vue.config.productionTip = false    //不要太多提示

new Vue({
    el: "#root",

    //方法1
    render: h => h(App)

    //方法2
    // render:function (createElement) {    //用来渲染组件标签的回调函数
    //    return createElement(App)         //返回<App>
    // }                                    //调用render函数返回得到忒返回的组件标签对象

    //方法3
    // components: {                           // 注册组件(后面才能写组件标签)
    //     App: App
    // },
    // template: '<App/>',

})

/*
    render:没有问题
        原因：内部使用vue-template-compliler提前编译好了模板
        优点：编码简介、打包文件 小
    template:有问题
        原因：内部不使用vue-template-compliler,vue默认引入的是不带编译器的打包版本
        解决：通过配置webpack.config让webpack打包时引入带编译器的版本

*/