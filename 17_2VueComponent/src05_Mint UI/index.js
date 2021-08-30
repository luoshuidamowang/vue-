
import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App'


//全局注册ui组件
Vue.component(Button.name,Button)


Vue.config.productionTip = false    //不要太多提示
new Vue({
    el: "#root",
    render: h => h(App),
})

