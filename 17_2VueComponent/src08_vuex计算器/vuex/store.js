


//vuex最核心的管理对象模块
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//相当于data对象，包含n个可变的属性数据
const state = {  //用来初始化状态数据
    count: 1,
}

//一个包含n个用于直接更新状态数据的方法的对象
//不要异步操作和逻辑处理代码
const mutations = {
    fn1(state) {        //增加的方法
        state.count++
    },

    fn2(state) {        //减少的方法
        state.count--
    }
}

//一个包含n个用于间接更新数据的方法的对象
//可以包含异步操作和逻辑处理代码
const actions = {

    fn3({ commit, state }) {
        if (state.count % 2 === 1) {
            commit('fn1')
        }
    },
    fn4({ commit }) {
        setTimeout(() => {
            commit('fn1')
        }, 1000);
    },

}

//一个包含n个基于state数据的getter计算属性的方法的对象
const getters = {
    evenOrOdd(state) {
        return state.count % 2 === 1 ? '奇书' : "偶数"
    }
}


export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})