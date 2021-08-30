

import Vue from 'vue'
import App from './App'
import './base.css'

Vue.config.productionTip = false    //不要太多提示

new Vue({
    el: "#root",

    
    render: h => h(App)
})

