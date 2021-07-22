

import Vue from 'vue'
import VueResource from 'vue-resource'
import App from '.'

Vue.use(VueResource)    //所有组件对象都有一个属性$http对象 get()/post()


//使用App.vue 方法一
new Vue({
    el: '#root',
    render: h => h(App),  //简写
})

