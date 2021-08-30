
import Vue from 'vue'
import App from './App'          //把注册好的路由在app的template模板汇总布局后引入渲染  
import store from './vuex/store'



Vue.config.productionTip = false    //不要太多提示
new Vue({
    el: "#root",
    render: h => h(App),    //渲染
    store,                  //所由的组件对象都能一个指向store属性：$store
})

