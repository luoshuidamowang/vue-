

import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'

//声明使用Vue插件:vue-resource包 用来发ajax请求
Vue.use(VueResource) //所有组件对象都有一个属性$http对象    get()/post()




Vue.config.productionTip = false    //不要太多提示
new Vue({
    el: "#root",
    render: h => h(App),
    beforeCreate() {
        //将当前vm对象所谓事件总线挂在vue原型对象上
        Vue.prototype.$eventBus = this
        // this.__proto__.$eventBus = this
    },
})

