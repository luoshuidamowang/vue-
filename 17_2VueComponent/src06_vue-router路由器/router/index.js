//路由器对象模块：路由文件汇总、注册、并且把路由器里面路由之间的父子、层叠关系确认

import Vue from 'vue'
import VueRouter from 'vue-router'      //引入下载的vue路由包
import About from '@/pages/About'       //引入自己写的对应路由显示页面内容的vue文件
import Home from '@/pages/Home'         //引入自己写的对应路由显示页面内容的vue文件
import News from '@/pages/News'         //引入自己写的对应路由显示页面内容的vue文件
import Message from '@/pages/Message'   //引入自己写的对应路由显示页面内容的vue文件
import MessageDetail from '@/pages/MessageDetail'   //引入自己写的对应路由显示页面内容的vue文件

//声明使用vue插件
Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',         //去除路径地址中的#    http://localhost:8082/#/home/message 

    //应用中的所有路由
    routes: [
        //设置路由名字,注册引入的路由文件
        {   path: '/about', component: About },
        {   path: '/home', component: Home,
            children: [ //注册子路由
                { path: '/home/news', component: News ,name:'news'},    //两种写法都行   name:'xxxx' 就可以代替/home/news
                { path: 'message', component: Message ,                 //两种写法都行
                    children:[ //注册动态子路由
                        {   path:'/home/news/detail/:id',
                            component:MessageDetail ,
                            name:'detail',
                            // props:true,                 //自动将接收的params参数以标签属性传入路由组件
                            props:( route )=>({id:route.params.id ,name:route.query.name } )      //函数返回的对象中所有属性都会以标签属性传入路由组件
                        } 
                    ]    
                },
                { path:'',redirect:'/home/message' }   //path:''默认在home下面 自动重定向的路由-页面打开就默认的路由 
            ]
        },
        //自动重定向的路由-页面打开就默认的路由
        { path: '/', redirect:'/home' },    

    ]
})