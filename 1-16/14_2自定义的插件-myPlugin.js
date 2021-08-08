//自定义的vue插件模块
(function (window) {

    //定义一个插件对象
    const MyPlugin = {}

    //插件对象必须要有一个install方法
    //Vue.js 的插件应该暴露一个 install 方法。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象：
    MyPlugin.install = function (Vue, options) {
        //给Vue添加工具/静态方法
        // 1. 添加全局方法或 property  即全局API
        Vue.myGlobalMethod = function () {
            console.log('Vue对象的方法')
        }

        //2. 定义全局指令
        Vue.directive('my-directive', function (el, binding) {
            el.textContent = binding.value + 'xmt'
        })

        // 4. 添加实例方法
        Vue.prototype.$myMethod = function () {
            console.log('Vue构造函数实例的方法，放在原型对象上')
        }
    }

    //暴露插件 添加到全局
    window.MyPlugin = MyPlugin
})(window)



