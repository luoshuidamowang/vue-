/* 
    一个对象模块：包含n个间接更新状态数据的方法的对象模块
    包含异步、逻辑代码

*/
import axios from 'axios'
import { REQUESTING, REQ_SUCCESS, REQ_ERROR } from './mutation-types'


export default {
    //搜索的异步action：包含了异步代码的action

    async search({ commit}, searchName) {   //第一个是内置参数，第二个是掉用dispatch的时候带过来的
        commit(REQUESTING)//在发送请求前，提交一个请求中的mutation:提供让页面显示请求中的数据状态

        try {
            //发送搜索的ajax请求
            const response = await axios.get( "https://api.github.com/search/users", { params: { q: searchName } } );

            //请求成功，更新数据(显示：成功)
            const result = response.data;
            const users = result.items.map((item) => ({
                username: item.login,
                url: item.html_url,
                avatar_url: item.avatar_url,
            }));
             //请求成功，提交请求成功的mutation：提供让页面显示搜索到的结果的数据
            // commit(REQ_SUCCESS, users)       //传递数据本身
            commit(REQ_SUCCESS, {users})        //传递包含数据的对象
        } catch (error) {
            //请求成功，更新数据(显示：失败)
            commit(REQ_ERROR, {errorMsg:error.message})  //提交请求失败的mutation：提供让页面显示失败的数据
        }

    }
}