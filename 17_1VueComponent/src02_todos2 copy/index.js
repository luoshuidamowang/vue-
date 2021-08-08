//原本查找： "main": "dist/vue.runtime.common.js",
//在webpack配置alias{'vue$': 'vue/dist/vue.esm.js'}后
//现在查找：    vue/dist/vue.esm.js        
import Vue from 'vue'
import App from './App'
import './base.css'

Vue.config.productionTip = false        //不显示没使用生产环境模式的提示

//Vue的原型对象添加一个vm对象属性
// Vue.prototype.$globalEventBus = new Vue()
// Vue.prototype.$EventBus= new Vue()
// Vue.prototype.$bus= new Vue()



//使用App.vue 方法一
new Vue({
    el: '#root',
    render: h => h(App),  //简写
    //为什么要用render 因为vue默认的版本不带编译器,需要手动修改,找到vue带编译器的版本文件
    // render:function(createElement){ //用来渲染组件标签的回调函数
    //     return createElement(App)   //返回<App/>
    //     //调用render函数得到他返回的组件标签函数
    // }
    beforeCreate () {       //在经历比较早的时间保存当前vm,作为全局事件总线对象
        Vue.prototype.$globalEventBus = this
    }
})


//使用App.vue 方法二
// new Vue({
//     el: '#root',
//     components:{
//         App
//     },
//     template:'<App/>'
// })


/*
    render：没有问题
        原因：内部使用vue-template-compliler提前编译好了模板
    template:有问题
        原因：
        内部不使用vue-template-compliler，就不能编译template
        vue默认引入的是不带编译器的打包版本vue.runtime.common.js
        解决：让webpack打包时引入带编译器的版本

    两种方式那种好：render
        代码简介
        打包文件小

*/