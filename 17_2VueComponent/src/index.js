

import Vue from 'vue'
import App from './App'
import './base.css'

Vue.config.productionTip = false    //不要太多提示

//给Vue的原型对象添加一个vm对象属性
Vue.prototype.$vm = new Vue()

new Vue({
    el: "#root",

    
    render: h => h(App)
})

