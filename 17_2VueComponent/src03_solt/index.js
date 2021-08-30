

import Vue from 'vue'
import App from './App'
import './base.css'

Vue.config.productionTip = false    //不要太多提示

//给Vue的原型对象添加一个vm对象属性 方法1：
// Vue.prototype.$globaEventBus = new Vue()

new Vue({
    el: "#root",
    render: h => h(App),
    //方法2：在尽量早的时间保存当前vm，作为全局事件总线对象
    beforeCreate(){
        Vue.prototype.$globaEventBus = this
    }
})

