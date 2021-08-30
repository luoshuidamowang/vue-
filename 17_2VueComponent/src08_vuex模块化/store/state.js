/* 
    一个对象模块：包含n个状态数据属性的模块

*/

/*用于依据输入框输入内容发送请求，以及当前页面显示数据 */
export default {
    firstView: true,    //是否显示第一个页面
    loading: false,     //是否再请求中
    users: [],          //请求到的用户列表
    errorMsg: "",       //请求错误的提示信息
    // searchName:'',
}