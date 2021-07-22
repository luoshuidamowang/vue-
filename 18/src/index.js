import Vue from 'vue'

import App from './App'

import './base.css'

Vue.config.productionTip = false        //不显示没使用生产环境模式的提示


new Vue({
    el:'#root',
    render:h =>h(App)

})