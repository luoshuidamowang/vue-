
import Vue from 'vue'
import App from './App'          //把注册好的路由在app的template模板汇总布局后引入渲染  
import router2 from "./router";  //把各个路由文件的父子、嵌套逻辑关系注册好后引入




Vue.config.productionTip = false    //不要太多提示
new Vue({
    el: "#root",
    router:router2,     //所有组件都能通过$router属性看到router对象 / 所有组件都有了一个代表当前路由的data数据：$route
    render: h => h(App),
})

