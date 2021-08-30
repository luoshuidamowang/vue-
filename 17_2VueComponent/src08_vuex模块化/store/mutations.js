/* 
    一个对象模块：包含n个直接更新状态数据的方法的对象模块
        不包含异步、逻辑代码

*/

import {REQUESTING,REQ_SUCCESS,REQ_ERROR} from './mutation-types'

export default {
    //请求中
    [REQUESTING](state) {       //想要一个函数名是一个变量呢?加一个中括号[]
        state.firstView = false //是否显示第一个页面:显示请输入关键字进行搜索
        state.loading = true    //是否在请求中:显示loading
    },

    //请求成功
    [REQ_SUCCESS](state,{users}){ //设置函数形参：actions里面commit()的时候传实参
        state.loading = false
        state.users = users
    },


    //请求失败
    [REQ_ERROR](state,{errorMsg}){ //设置函数形参：actions里面commit()的时候传实参
        state.loading = false
        state.errorMsg = errorMsg
    },

}