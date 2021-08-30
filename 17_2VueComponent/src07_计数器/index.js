
import Vue from 'vue'
import App from './App'          //把注册好的路由在app的template模板汇总布局后引入渲染  




Vue.config.productionTip = false    //不要太多提示
new Vue({
    el: "#root",
    render: h => h(App),
})

