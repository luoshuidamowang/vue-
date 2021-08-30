
import Vue from 'vue'
import App from './App'

export default new Vue({
    el:'#root',
    // render(h) {
    //     return h=>(app)
    // },
    render: (h)=>h(App)
})