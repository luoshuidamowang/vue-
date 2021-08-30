

import Vue from 'vue'       //引入包
import App from './App.vue'     //引入文件
import store from './store' //引入文件





Vue.config.productionTip = false    //不要太多提示
new Vue({
    el: "#root",
    render: h => h(App),
    store,  //所有组件都能通过$store看到store对象
})

